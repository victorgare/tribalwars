// ==UserScript==
// @name         Auto Farm
// @version      0.3
// @include      https://*&screen=am_farm*
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/FarmAssistenteSaque.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/FarmAssistenteSaque.user.js
// ==/UserScript==

var atualizarPagina = 1;
var tempo = 350;
var x = 0;
var minhaVar = "";
var remove_atacadas = 1;
var menu = $('#am_widget_Farm a.farm_icon_a');
var altAldTempo = 1;
var jaEnviados = $(menu).parent().parent().find('img.tooltip').length + "000";
if (remove_atacadas == 0) {
    $('img').each(function () {
        var tempStr = $(this).attr('src');
        if (tempStr.indexOf('attack') != -1) {
            $(this).addClass('tooltip');
        }
    });
}

if (atualizarPagina == 1) {
    setInterval(
        function () {
            window.location.reload();
        }, 220222);

}
console.log("Ja existe " + jaEnviados.substring(0, (jaEnviados.length - 3)) + " aldeia com ataque.");
if (altAldTempo == "1") {
    var altAldTempo = aleatorio(18553, 6556);

} else {
    var altAldTempo = parseInt(altAldTempo) + parseInt(aleatorio(46353, 24356));
}
console.log("Resta " + altAldTempo + " milesegundos para alternar a aldeia.");
function aleatorio(superior, inferior) {
    numPosibilidades = superior - inferior;
    aleat = Math.random() * numPosibilidades;
    return Math.round(parseInt(inferior) + aleat);
}
for (i = 0; i < 100; i++) {
    $(menu).eq(i).each(function () {
        if (!($(this).parent().parent().find('img.tooltip').length)) {
            var tempoAgora = (tempo * ++x) - aleatorio(300, 900);
            setTimeout(function (minhaVar) {
                $(minhaVar).click();
            }, tempoAgora, this);

        }
    });
}
function altAldeia() {
    //$("#village_switch_right").click();
    document.getElementById('village_switch_right').click();
    document.getElementById('village_switch_left').click();

    //$('#village_switch_left').click();
    //location.reload();
}
setInterval(altAldeia, altAldTempo);
