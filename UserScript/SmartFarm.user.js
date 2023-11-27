// ==UserScript==
// @name         Smart Farm
// @version      1.2
// @description  Smart farm script for better farming
// @author       Victor Garé
// @match        https://*.tribalwars.com.br/*&screen=am_farm*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tribalwars.com.br
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/SmartFarm.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/SmartFarm.user.js
// @run-at document-end
// @run-at document-idle
// ==/UserScript==


// Constants and Configuration
const CONFIG = {
  SKIP_WALL: true,
  RELOAD_INTERVAL: { MIN: 240000, MAX: 420000 },
  ATTACK_INTERVAL: 1000,
  WAIT_TIME: { MIN: 1500, MAX: 3500 }
};

// Utility functions
const delay = ms => new Promise(res => setTimeout(res, ms));
const randomTime = (min, max) => Math.round(min + Math.random() * (max - min));

// Main Script Execution
(function () {
  'use strict';

  // Check for required dependencies
  if (typeof Accountmanager === 'undefined' || typeof Accountmanager.farm === 'undefined') {
    console.error('Accountmanager or farm not defined');
    return;
  }

  class SmartFarm {
    constructor() {
      this.TemplatesEnum = {
        A: 'a',
        B: 'b',
      };
    }

    getTemplates() {
      return Accountmanager.farm.templates;
    }

    getCurrentUnits() {
      return Accountmanager.farm.current_units;
    }

    getNextVillage() {
      return document.querySelector("tr[id^='village_']:not([style='display: none;'])");
    }

    hasLootedAll(villageElement) {
      const lastLoot = villageElement.querySelector("img[src*='max_loot']");
      return lastLoot && lastLoot.getAttribute("src").endsWith("1.png");
    }

    hasEnoughUnitsInTemplate(template) {
      const units = this.getCurrentUnits();
      return Object.entries(units).every(([unitName, unitQuantity]) => {
        return !template[unitName] || unitQuantity >= template[unitName];
      });
    }

    getWallLevel(villageElement) {
      return villageElement.querySelectorAll("td")[6].innerHTML;
    }

    validateAndHideWall(villageElement) {
      const wallLevel = this.getWallLevel(villageElement);
      if (wallLevel !== '?' && parseInt(wallLevel, 10) > 0) {
        villageElement.style.display = 'none';
        return true;
      }
      return false;
    }

    clickTemplate(templateType, villageElement) {
      const selector = `a.farm_icon.farm_icon_${templateType}`;
      const templateLink = villageElement.querySelector(selector);
      templateLink?.click();
    }

    validateAndSendTemplate(template, villageElement, templateType) {
      if (this.hasEnoughUnitsInTemplate(template)) {
        this.clickTemplate(templateType, villageElement);
        return true;
      }
      return false;
    }

    reloadPage() {
      const reloadTime = randomTime(CONFIG.RELOAD_INTERVAL.MIN, CONFIG.RELOAD_INTERVAL.MAX);
      console.log(`will reload in ${reloadTime / 1000} seconds`);
      setTimeout(() => {
        console.log("reloading...");
        window.location.reload();
      }, reloadTime);
    }

    async sendAttack() {
      const templates = this.getTemplates();
      if (!templates) return;

      const [templateA, templateB] = Object.values(templates);
      const villageElement = this.getNextVillage();

      if (villageElement) {
        if (CONFIG.SKIP_WALL && this.validateAndHideWall(villageElement)) return;

        if (this.hasLootedAll(villageElement)) {
          if (!this.validateAndSendTemplate(templateB, villageElement, this.TemplatesEnum.B)) {
            this.validateAndSendTemplate(templateA, villageElement, this.TemplatesEnum.A);
          }
        } else {
          this.validateAndSendTemplate(templateA, villageElement, this.TemplatesEnum.A);
        }

        await delay(randomTime(CONFIG.WAIT_TIME.MIN, CONFIG.WAIT_TIME.MAX));
      }
    }

    async init() {
      console.log("starting farm");
      this.reloadPage();
      setInterval(() => this.sendAttack(), CONFIG.ATTACK_INTERVAL);
    }
  }

  new SmartFarm().init();
})();
