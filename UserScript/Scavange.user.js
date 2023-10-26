// ==UserScript==
// @name         Scavange
// @version      0.1
// @description  Auto scavange
// @author       Victor Garé
// @match https://*.tribalwars.com.br/*&screen=place&mode=scavenge*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tribalwars.com.br
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/Scavange.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/Scavange.user.js
// @run-at document-end
// ==/UserScript==

(function () {
  "use strict";

  function randonTime(superior, inferior) {
    const numPosibilidades = superior - inferior;
    const aleat = Math.random() * numPosibilidades;
    return Math.round(parseInt(inferior) + aleat);
  }

  const Scavange = new (function () {
    const scavangesWeight = [15, 6, 3, 2];

    const getBlockedScavanges = () => {
      return document.getElementsByClassName("unlock-button").length;
    };

    const getAvailableScavanges = () => {
      return document.getElementsByClassName("free_send_button");
    };

    const getScavangeWeight = () => {
      const blockedScavanges = getBlockedScavanges() * -1;

      return scavangesWeight
        .slice(0, blockedScavanges)
        .reduce((item1, item2) => {
          return item1 + item2;
        });
    };

    const getAvailableTroops = () => {
      // we want to avoid sendint the paladin in scavange
      // we wanto to avoid sending CL in scavange
      const unitsToAvoid = ["knight", "light"];

      let responseTroops = [];
      const troops = document.getElementsByClassName("units-entry-all");

      for (const troop of troops) {
        var unitType = troop.getAttribute("data-unit");

        if (!unitsToAvoid.includes(unitType)) {
          responseTroops.push({
            unit: troop.getAttribute("data-unit"),
            quantity: parseInt(
              troop.innerHTML.replace("(", "").replace(")", "")
            ),
          });
        }
      }

      return responseTroops;
    };

    const calculateScavangeTroops = (scavangeWeight, troops) => {
      const totalWeight = getScavangeWeight();

      const result = [];
      for (const troop of troops) {
        const troopsToSend = Math.round(
          (troop.quantity * scavangeWeight) / totalWeight
        );

        result.push({
          unit: troop.unit,
          quantityToSend: troopsToSend,
        });
      }

      return result;
    };

    const sendScavange = (weight, troops, element) => {
      const troopsToSend = calculateScavangeTroops(weight, troops);
      for (const troopToSend of troopsToSend) {
        if (troopToSend.quantityToSend) {
          var inputs = $(`[name=${troopToSend.unit}]`);
          inputs.val(troopToSend.quantityToSend.toString()).change();
        }
      }

      element.click();
    };

    this.init = () => {
      document.onreadystatechange = () => {
        if (document.readyState === "complete") {
          const troops = getAvailableTroops();
          const availableScavanges = getAvailableScavanges();

          const scavangesUnlocked =
            scavangesWeight.length - getBlockedScavanges();

          // only run scavange if all unlocked are available
          // to prevent from sending wrong number of troops
          if (availableScavanges.length >= scavangesUnlocked) {
            for (let index = 0; index < availableScavanges.length; index++) {
              const weight = scavangesWeight[index];
              const element = availableScavanges[index];

              const delayTime = 3000 + 3000 * index;
              setTimeout(sendScavange(weight, troops, element), delayTime);
            }
          }
        }
      };
    };
  })();

  Scavange.init();

  // reload between 5 and 10 minutes
  const reloadTime = randonTime(300000, 600000);
  console.log(`will reload in ${reloadTime / 1000} seconds`);
  // const reloadTime = randonTime(1000, 5000);
  setInterval(function () {
    console.log("reloading...");
    location.reload(true);
  }, reloadTime);
})();
