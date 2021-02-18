// ==UserScript==
// @name         Market autofill
// @description  Fill market boxes with configurable default values when making offers in the market
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       https://github.com/Dude29
// @match        https:///game.php?&screen=market&mode=own_offer*
// @grant        none
// @run-at       document-end
// ==/UserScript==

function setResourceValue(inputElement, value=1000) {
    if(!inputElement) {
        return
    }
    inputElement.value = value
}
setResourceValue(document.querySelector('#res_sell_amount'))
setResourceValue(document.querySelector('#res_buy_amount'))
