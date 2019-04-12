// ==UserScript==
// @name         Resourses Request
// @version      0.2
// @description  Request resources to a specific village
// @author       Victor Garé
// @include https://*screen=market&mode=call*
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/ResourcesRequest.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/ResourcesRequest.user.js
// @run-at document-end
// @grant        none
// ==/UserScript==

(function () {
    const resourceRequest = new function () {
        const _intervalInMinutes = 10;
        const _modelToUse = "Proporção"; // Altere para o modelo desejado

        const setModelToUse = function () {
            var templates = document.getElementsByName("templates");

            for (const template of templates) {
                for (const option of template.options) {
                    if (option.text === _modelToUse) {
                        option.selected = 'selected';
                    }
                }
            }
        };

        const checkAll = function () {
            const checks = document.getElementsByName("select-all");
            for (const check of checks) {
                check.click();
            }
        };

        const request = function () {
            var form = document.querySelectorAll("form[name='call-resources']");

            if (form !== null && form !== undefined) {
                form[0].submit();
            }
        };

        const bind = function () {
            setModelToUse();

            setTimeout(function () {
                checkAll();
                request();
            }, _intervalInMinutes * 60000);
        };

        this.init = function () {
            bind();
        }
    };

    resourceRequest.init();
})(window);