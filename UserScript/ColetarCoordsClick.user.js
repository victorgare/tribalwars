// ==UserScript==
// @name         Coletor Coords por Click
// @version      0.1
// @description  Coleta as coordenadas quando clicado pelo mapa
// @author       Victor Garé
// @include https://*&screen=map*
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/ColetarCoordsClick.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/ColetarCoordsClick.user.js
// @run-at document-end
// ==/UserScript==

'use strict';
var divLegendas;
var textAreaCoords;

$(window).on("load", function () {

    new CriarTextArea();

    //sobrescreve a funcao padrao do JS do game
    //adicionando a funcionalidade extra pra pegar as coordenadas
    TWMap.mapHandler.onClick = function (e, a, t) {

        new AdicionarCoordenadas(e + "|" + a);

        var i = TWMap.villages[1e3 * e + a];
        if (i) {
            if (TWMap.warMode && Warplanner.admin) {
                return Warplanner.onVillageClicked(i.id, e, a),
                    !1;
            }
            if (!TWMap.context.enabled) {
                return (!t || $.browser.msie && ~~$.browser.version < 8) && (window.location.href = TWMap.urls.villageInfo.replace(/__village__/, i.id)),
                    !0;
            }
            TWMap.context.spawn(i, e, a)
        } else {
            TWMap.context.hide();
        }
        return !1
    }
});

function CriarTextArea() {
    divLegendas = $("#map_legend");
    var textArea = $('<textarea id="txtCoords" style="width: 95%" />');
    divLegendas.append(textArea);
}

function AdicionarCoordenadas(coordenada) {
    $("#txtCoords").append(" " + coordenada);
}