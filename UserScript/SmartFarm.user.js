// ==UserScript==
// @name         Smart Farm
// @version      0.1
// @description  Smart farm script for better farming
// @author       Victor Garé
// @match        https://*.tribalwars.com.br/*&screen=am_farm*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tribalwars.com.br
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/SmartFarm.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/SmartFarm.user.js
// @run-at document-end
// ==/UserScript==

(function () {
  "use strict";

  const SmartFarm = new (function () {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const randonTime = (superior, inferior) => {
      const numPosibilidades = superior - inferior;
      const aleat = Math.random() * numPosibilidades;
      return Math.round(parseInt(inferior) + aleat);
    };

    const getTemplates = () => {
      return Accountmanager.farm.templates;
    };

    const getCurrentUnits = () => {
      return Accountmanager.farm.current_units;
    };

    const getAvailableLightCavalry = () => {
      return Accountmanager.farm.current_units.light;
      //   return parseInt(document.getElementById("light").innerHTML);
    };

    const getNextVillage = () => {
      // query only rows that are visible!
      return document.querySelector(
        "tr[id^='village_']:not([style='display: none;'])"
      );
    };

    const hasLootedAll = (element) => {
      const lastLoot = element.querySelector("img[src*='max_loot']");
      return lastLoot.getAttribute("src").endsWith("1.png");
    };

    const hasEnoughUnitsInTemplate = (template) => {
      const units = getCurrentUnits();

      for (const unitName in units) {
        const unitQuantity = units[unitName];
        const templateUnityQuantity = template[unitName];

        if (templateUnityQuantity && unitQuantity < templateUnityQuantity) {
          return false;
        }
      }

      return true;
    };

    const clickTemplateB = (element) => {
      element.querySelector("a.farm_icon.farm_icon_b").click();
    };

    const clickTemplateA = (element) => {
      element.querySelector("a.farm_icon.farm_icon_a").click();
    };

    const validateAndSendTemplateA = (template, element) => {
      if (hasEnoughUnitsInTemplate(template)) {
        clickTemplateA(element);
        return true;
      }
      return false;
    };

    const reloadPage = () => {
      // reload between 5 and 10 minutes
      const reloadTime = randonTime(60000, 120000);
      console.log(`will reload in ${reloadTime / 1000} seconds`);
      setInterval(function () {
        console.log("reloading...");
        location.reload(true);
      }, reloadTime);
    };

    this.init = () => {
      document.onreadystatechange = async () => {
        if (document.readyState === "complete") {
          let exit = false;
          const [templateA, templateB] = Object.values(getTemplates());

          let index = 0;
          do {
            const element = getNextVillage();

            if (!element) {
              exit = true;
              console.log("no more villages to attack");
              break;
            }

            if (hasLootedAll(element)) {
              if (hasEnoughUnitsInTemplate(templateB)) {
                clickTemplateB(element);
              } else {
                exit = !validateAndSendTemplateA(templateA, element);
              }
            } else {
              exit = !validateAndSendTemplateA(templateA, element);
            }

            index++;
            // await at leat 250 ms until next atak
            // this prevent request flood
            const waitTime = randonTime(250, 350);
            await delay(waitTime);

            // if (index >= 10) {
            //   exit = true;
            // }

            if (exit) {
              console.log("exiting...");
            }
          } while (!exit);

          reloadPage();
        }
      };
    };
  })();

  SmartFarm.init();
})();
