// ==UserScript==
// @name         Farm Mapa
// @namespace
// @version      0.1
// @description  farma as aldeias pela aba do mapa usando o AS no modelo --->A<---
// @author       Victor Garé
// @include      https://*&screen=map*
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/FarmMapa.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/FarmMapa.user.js
// @grant        none
// ==/UserScript==

"use strict";

$(document).ready(function () {
    var villages = TWMap.villages;
    var vk = TWMap.villageKey;
    var key = {};
    var keySorted = {};
    var contador = 0;
    var tempo = 350;
    var x = 0;
    var altAldTempo = aleatorio(180000, 300000);
    //var altAldTempo = aleatorio(30000,60000);



    function aleatorio(superior, inferior) {
        numPosibilidades = superior - inferior;
        aleat = Math.random() * numPosibilidades;
        return Math.round(parseInt(inferior) + aleat);
    }

    for (var j in vk) {
        key[contador] = vk[j];
        contador++;
    }

    var indice = 0;
    for (var s = 0; s <= contador; s++) {
        var coordsA = TWMap.CoordByXY(key[s]);
        villageA = TWMap.context.FATooltip.distance(game_data.village.x, game_data.village.y, coordsA[0], coordsA[1]);

        indice = 0;

        for (var sb = 0; sb < contador; sb++) {

            var coordsB = TWMap.CoordByXY(key[sb]);
            villageB = TWMap.context.FATooltip.distance(game_data.village.x, game_data.village.y, coordsB[0], coordsB[1]);

            if (villageA > villageB) {
                indice++;
            }
        }
        keySorted[indice] = key[s];
    }

    key = keySorted;

    contador = 0;
    for (var k in key) {

        var village = villages[key[k]];

        (function (villageA) {
            var tempoAgora = (tempo * ++x) - aleatorio(150, 300);
            setTimeout(function () {
                if (villageA.owner == "0") {
                    //var coordAtual = TWMap.CoordByXY(key[k]);
                    console.log(villageA);
                    var coordAtual = TWMap.CoordByXY(villageA);
                    TWMap.mapHandler.onClick(coordAtual[0], coordAtual[1], new Event('click'));

                    var url = TWMap.urls.ctx["mp_farm_a"].replace(/__village__/, villageA.id).replace(/__source__/, game_data.village.id);

                    TribalWars.get(url, null, function (a) { TWMap.context.ajaxDone(null, url); }, undefined, undefined);

                    contador++;
                }
            }, tempoAgora);
        })(village);
    }

    function altAldeia() {
        //$('.arrowRight').click();
        //$('.groupRight').click();
        location.reload();
    }

    setInterval(altAldeia, altAldTempo);
});