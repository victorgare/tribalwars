// ==UserScript==
// @name         Continuos Recruting
// @version      0.2
// @description  Irá recrutar uma unidade das configuradas caso não haja nenhuma na fila
// @author       Victor Garé
// @include https://*&screen=train*
// @include https://*&screen=barracks*
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/ContinuousRecruting.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/ContinuousRecruting.user.js
// @run-at document-end
// ==/UserScript==

var objetoTropas = [];
var altAldTempo = aleatorio(10000, 100000);

var lanca = false;
var espada = false;
var barbaro = false;
var explorador = false;
var cavalariaLeve = false;
var cavalariaPesada = false;
var catapulta = false;
var ariete = false;

var classEnum = Object.freeze({
    lanca: ".unit_sprite_smaller.spear",
    espada: ".unit_sprite_smaller.sword",
    barbaro: ".unit_sprite_smaller.axe",
    explorador: ".unit_sprite_smaller.spy",
    cavalariaLeve: ".unit_sprite_smaller.light",
    cavalariaPesada: ".unit_sprite_smaller.heavy",
    ariete: ".unit_sprite_smaller.ram",
    catapulta: ".unit_sprite_smaller.catapult"
});

function GerarObjeto() {
    objetoTropas = [
        {
            nomeUnidade: "spear",
            recrutar: lanca,
            cssClassSelector: classEnum.lanca
        },
        {
            nomeUnidade: "sword",
            recrutar: espada,
            cssClassSelector: classEnum.espada
        },
        {
            nomeUnidade: "axe",
            recrutar: barbaro,
            cssClassSelector: classEnum.barbaro
        },
        {
            nomeUnidade: "spy",
            recrutar: explorador,
            cssClassSelector: classEnum.explorador
        },
        {
            nomeUnidade: "light",
            recrutar: cavalariaLeve,
            cssClassSelector: classEnum.cavalariaLeve
        },
        {
            nomeUnidade: "heavy",
            recrutar: cavalariaPesada,
            cssClassSelector: classEnum.cavalariaPesada
        },
        {
            nomeUnidade: "ram",
            recrutar: ariete,
            cssClassSelector: classEnum.ariete
        },
        {
            nomeUnidade: "catapult",
            recrutar: catapulta,
            cssClassSelector: classEnum.catapulta
        }
    ];
}

$(document).ready(function () {
    GerarObjeto();

    var retorno = false;
    objetoTropas.forEach(element => {
        var response = validarPreencher(element);

        //se o retorno não tiver sido verdadeiro nos loops anteriores, seta com o valor da resposta atual
        //caso ja tenha sido, manter o valor como verdadeiro
        if (!retorno) {
            retorno = response;
        }
    });

    if (retorno) {
        $(".btn-recruit").click();
    }

    console.log(altAldTempo);
    setInterval(function () {
        console.log("recarrega");
        location.reload(true);
    }, altAldTempo);
});

function validarPreencher(singleObject) {
    if (singleObject.recrutar) {
        if ($(singleObject.cssClassSelector).length <= 0) {
            $("input[name=" + singleObject.nomeUnidade + "]").val("1");
            return true;
        }
    }
    return false;
}


function aleatorio(superior, inferior) {
    numPosibilidades = superior - inferior;
    aleat = Math.random() * numPosibilidades;
    return Math.round(parseInt(inferior) + aleat);
}
