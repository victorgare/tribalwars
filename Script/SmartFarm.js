
(function () {
  'use strict';
  const SmartFarm = new function () {
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
      // reload between 4 and 7 minutes
      const reloadTime = randonTime(240000, 420000);
      console.log(`will reload in ${reloadTime / 1000} seconds`);
      setInterval(function () {
        console.log("reloading...");
        window.location.reload();
      }, reloadTime);
    };

    const sendAttack = async () => {
      const [templateA, templateB] = Object.values(getTemplates());
      const element = getNextVillage();

      if (element) {
        if (hasLootedAll(element)) {
          if (hasEnoughUnitsInTemplate(templateB)) {
            clickTemplateB(element);
          } else {
            validateAndSendTemplateA(templateA, element);
          }
        } else {
          validateAndSendTemplateA(templateA, element);
        }

        // await at leat 250 ms until next atak
        // this prevent request flood
        const waitTime = randonTime(250, 350);
        await delay(waitTime);
      }
    }
    this.init = async () => {
      console.log("starting farm")

      // start the page reload
      reloadPage()

      setInterval(async () => {
        await sendAttack()
      }, 500)

    };
  };

  $(function () {
    Accountmanager.farm.init();
    SmartFarm.init();
  });
})();
