// ==UserScript==
// @name         Resources Sender
// @version      0.1
// @description  Send resources to a specified village!
// @author       Victor Garé
// @include https://*screen=market&mode=send*
// @include https://*try=confirm_send*
// @require https://code.jquery.com/jquery-3.3.1.min.js
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/ResourcesSender.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/ResourcesSender.user.js
// @run-at document-end
// @grant        none
// ==/UserScript==


(function () {
    const ResourcesSender = new function () {
        const _destino = ""; // aldeia de destino
        const _minTime = 8000; // 8 segundos em milisegundos
        const _maxTime = 15000; // 15 segundos em milisegundos
        const _woodPercentage = 0.34; // porcentagem de madeira para enviar
        const _stonePercentage = 0.36; // porcentagem de argila pra enviar
        const _ironPercentage = 0.30; // porcentagem de ferro apra enviar

        const randonNumber = function (min, max) {
            return Math.random() * (max - min) + min;
        }


        const getMerchantsAvailable = function () {
            return parseInt(document.getElementById("market_merchant_available_count").innerHTML);
        };

        const getResourcesAmount = function () {
            const wood = parseInt(document.getElementById("wood").innerHTML);
            const stone = parseInt(document.getElementById("stone").innerHTML);
            const iron = parseInt(document.getElementById("iron").innerHTML);

            return {
                wood: wood,
                stone: stone,
                iron: iron
            }
        };

        const setValueToSend = function (value1, value2, input) {
            // sempre devera inserir no campo o MENOR valor, para não ocorrer problemas de quantidade
            // se os valores forem zero, nem continua com os tramites
            if (value1 === 0 || value2 === 0) {
                return false;
            }

            if (value1 > value2) {
                input.val(value2);
            } else {
                input.val(value1);
            }

            return true;
        }

        const submitButton = function () {
            $("input[type='submit']").click();
        }

        const sendResources = function () {
            // devera sera o destino no campo correto
            // clicar no botao OK
            $(".target-input-field ").val(_destino);
            submitButton();
        }

        const nextVillage = function () {
            document.getElementById("village_switch_right").click();
        }

        const calculateResources = function () {
            const resourcesAvailable = getResourcesAmount();
            const availableMerchants = getMerchantsAvailable();

            let woodToSend = Math.floor((resourcesAvailable.wood * _woodPercentage) / 1000) * 1000;
            let stoneToSend = Math.floor((resourcesAvailable.stone * _stonePercentage) / 1000) * 1000;
            let ironToSend = Math.floor((resourcesAvailable.iron * _ironPercentage) / 1000) * 1000;

            let merchantToSendWood = Math.floor(availableMerchants * _woodPercentage) * 1000;
            let merchantToSendStone = Math.floor(availableMerchants * _stonePercentage) * 1000;
            let merchantToSendIron = Math.floor(availableMerchants * _ironPercentage) * 1000;

            let woodInput = $('input[name="wood"]');
            let stoneInput = $('input[name="stone"]');
            let ironInput = $('input[name="iron"]');

            // chama metodo que faz a regra dos recursos a serem enviados
            // se nao houver recursos a serem enviados, passa para a próxima aldeia
            const envioMandeira = setValueToSend(woodToSend, merchantToSendWood, woodInput);
            const envioArgila = setValueToSend(stoneToSend, merchantToSendStone, stoneInput);
            const envioFerro = setValueToSend(ironToSend, merchantToSendIron, ironInput);

            if (envioMandeira || envioArgila || envioFerro) {

                // se os tres metodos acima retornarem verdadeiro, deve-se tentar dar o submit
                // metodo que devera enviar os recursos
                sendResources();
            } else {
                nextVillage();
            }
        }

        const bind = function () {

            // a primeria condição valida se estamos na tela de confirmar envio
            // a segunda se estamos na tela para calcular os recursos
            if ($("h2").html() === "Confirmar transporte") {
                submitButton();
            } else {
                setTimeout(calculateResources, randonNumber(_minTime, _maxTime));
            }
        };

        this.init = function () {
            bind();
        };
    }

    ResourcesSender.init();
})();