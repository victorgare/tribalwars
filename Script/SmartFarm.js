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
      // reload between 1 and 2 minutes
      const reloadTime = randonTime(60000, 120000);
      console.log(`will reload in ${reloadTime / 1000} seconds`);
      setInterval(function () {
        console.log("reloading...");
        window.location.reload(true);
      }, reloadTime);
    };

    this.init = async () => {
      let exit = false;
      const [templateA, templateB] = Object.values(getTemplates());

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

        // await at leat 250 ms until next atak
        // this prevent request flood
        const waitTime = randonTime(250, 350);
        await delay(waitTime);

        if (exit) {
          console.log("exiting...");
        }
      } while (!exit);

      reloadPage();
    };
  })();

  $(document).ready(() => {
    // wait 1 sec after page load to start script
    setTimeout(() => {
      SmartFarm.init();
    }, 1000);
  });
})();
