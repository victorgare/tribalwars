"use strict";

$(document).ready(function () {
    (() => {
        var aldeiaAlvo = {
            x: 400,
            y: 538
        };

        var threadRepeat = null;

        var aldeiaRef = Object.values(TWMap.villages).filter(e => e.xy === parseInt(aldeiaAlvo.x + '' + aldeiaAlvo.y))[0];
        var url = TWMap.urls.ctx["mp_farm_a"].replace(/__village__/, aldeiaRef.id).replace(/__source__/, game_data.village.id);

        function isRecaptchaWindowPresent() {
            var isPresent = false;
            if (document.querySelector('#rc-anchor-alert')) {
                isPresent = true;
            }
            if (document.querySelector("#rc-anchor-container")) {
                isPresent = true;
            }
            if (document.querySelector("#recaptcha-token")) {
                isPresent = true;
            }
            if (isPresent) {
                console.log("SE FERROU, RECAPTCHA TÁ NA AREA AUHEAUHEAUHAE");
            }
            return isPresent;
        }

        function aleatorio(superior, inferior) {
            var max = Math.max(superior, inferior);
            var min = Math.min(superior, inferior);
            numPosibilidades = max - min;
            aleat = Math.random() * numPosibilidades;
            return parseInt(Math.round(parseInt(inferior) + aleat));
        }

        function gameOver(message) {
            TribalWars.playAttackSound();
            TribalWars.playAttackSound();
            TribalWars.playAttackSound();
            TribalWars.playAttackSound();
            clearInterval(threadRepeat);
            threadRepeat = null;
            alert(message);
        }

        function isNoUnitsLeft() {
            var autoHideBoxX = document.querySelector(".autoHideBox.error");
            if (autoHideBoxX) {
                return (autoHideBoxX.innerHTML || '').toLowerCase().indexof("não existem unidades suficientes") !== -1;
            }
            return false;
        }

        function isRequestLimitsToServer() {
            var autoHideBoxX = document.querySelector(".autoHideBox.error");
            if (autoHideBoxX) {
                return (autoHideBoxX.innerHTML || '').toLowerCase().indexof("limite de requisições") !== -1;
            }
            return false;
        }

        function restartThread() {

            if (threadRepeat != null) {
                clearInterval(threadRepeat);
            }

            threadRepeat = setInterval(() => {
                if (isRecaptchaWindowPresent()) {
                    return gameOver('SCRIPT PARADO POR CONTA DE RECAPTCHA :P');
                }
                if (isNoUnitsLeft()) {
                    console.warn('SCRIPT PARADO POIS NÃO HÁ UNIDADES RESTANTES :(');
                    return setTimeout(() => restartThread());
                }
                if (isRequestLimitsToServer()) {
                    console.warn('LIMITE DE REQUISIÇÕES FEITAS AO SERVIDOR.... AGUARDANDO');
                    return setTimeout(() => restartThread());
                }
                TWMap.mapHandler.onClick(aldeiaAlvo.x, aldeiaAlvo.y, new Event('click'));
                TribalWars.get(url, null, function (a) {
                    TWMap.context.ajaxDone(null, url);
                }, undefined, undefined);
            }, aleatorio(318, 537));
        }

        restartThread();
        setInterval(() => {
            restartThread();
        }, aleatorio(10000, 18000));

    })();

});