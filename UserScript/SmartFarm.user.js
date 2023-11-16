// ==UserScript==
// @name         Smart Farm
// @version      1.1
// @description  Smart farm script for better farming
// @author       Victor Garé
// @match        https://*.tribalwars.com.br/*&screen=am_farm*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tribalwars.com.br
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/SmartFarm.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/SmartFarm.user.js
// @run-at document-end
// @run-at document-idle
// ==/UserScript==

// Should skip villages with wall?
// true = yes
// false = no
const SKIP_WALL = true;

(function () {
  'use strict';

  const SmartFarm = new function () {
    const TemplatesEnum = {
      A: 'a',
      B: 'b',
    }

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const randomTime = (min, max) => {
      return Math.round(min + Math.random() * (max - min));
    };

    const getTemplates = () => {
      return Accountmanager.farm.templates;
    };

    const getCurrentUnits = () => {
      return Accountmanager.farm.current_units;
    };

    const getNextVillage = () => {
      // query only rows that are visible!
      return document.querySelector(
        "tr[id^='village_']:not([style='display: none;'])"
      );
    };

    const hasLootedAll = (villageElement) => {
      const lastLoot = villageElement.querySelector("img[src*='max_loot']");
      return lastLoot && lastLoot.getAttribute("src").endsWith("1.png");
    };

    const hasEnoughUnitsInTemplate = (template) => {
      const units = getCurrentUnits();

      for (const unitName in units) {
        if (units.hasOwnProperty(unitName)) {
          const unitQuantity = units[unitName];
          const templateUnitQuantity = template[unitName];

          if (templateUnitQuantity && unitQuantity < templateUnitQuantity) {
            return false;
          }
        }
      }

      return true;
    };

    const getWallLevel = (villageElement) => {
      return (villageElement.querySelectorAll("td")[6]).innerHTML
    }

    const validateAndHideWall = (villageElement) => {
      const wallLevel = getWallLevel(villageElement)
      if (wallLevel !== '?' && parseInt(wallLevel) > 0) {
        villageElement.style.display = 'none';

        return true
      }

      return false
    }

    const clickTemplate = (templateType, villageElement) => {
      const selector = `a.farm_icon.farm_icon_${templateType}`;
      const templateLink = villageElement.querySelector(selector);

      if (templateLink) {
        templateLink.click();
      }
    };

    const validateAndSendTemplate = (template, villageElement, templateType) => {
      if (hasEnoughUnitsInTemplate(template)) {
        clickTemplate(templateType, villageElement);
        return true;
      }
      return false;
    };

    const reloadPage = () => {
      const reloadTime = randomTime(240000, 420000);
      console.log(`will reload in ${reloadTime / 1000} seconds`);
      setTimeout(() => {
        console.log("reloading...");
        window.location.reload();
      }, reloadTime);
    };

    const sendAttack = async () => {

      const templates = getTemplates();
      if (!templates) return;

      const [templateA, templateB] = Object.values(templates);
      const villageElement = getNextVillage();


      if (villageElement) {
        if (SKIP_WALL) {
          const result = validateAndHideWall(villageElement)
          if (result) return;
        }

        if (hasLootedAll(villageElement)) {
          if (!validateAndSendTemplate(templateB, villageElement, TemplatesEnum.B)) {
            validateAndSendTemplate(templateA, villageElement, TemplatesEnum.A);
          }
        } else {
          validateAndSendTemplate(templateA, villageElement, TemplatesEnum.A);
        }

        const waitTime = randomTime(250, 350);
        await delay(waitTime);
      }
    };


    this.init = async () => {
      console.log("starting farm");

      // start the page reload
      reloadPage();

      setInterval(async () => {
        await sendAttack();
      }, 200)
    };

  };

  $(function () {
    if (typeof Accountmanager !== 'undefined' && Accountmanager.farm) {
      Accountmanager.farm.init();
      SmartFarm.init();
    } else {
      console.error('Accountmanager or farm not defined');
    }
  });
})();
