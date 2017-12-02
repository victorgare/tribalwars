var tempo = 1000;
var x = 0;
var FakesPorAldeia = 30; //quantidade de fakes por aldiea
var sp = 0; // lanceiros
var sw = 0; // espadachins
var ax = 0; //barbaros
var scout = 0; //exploradores
var lc = 0; //calavaria leve
var hv = 0; // cavalaria pesada
var cat = 0; //catapulta
var ra = 1; // ariete
var coords = '524|465';
var doc = document;
var url = document.URL;
var cookieName = "manee";
var cookieNameTent = "tent1cookie";
var cookieNumAtaques = "NumeroAtaques";
var maxTentativas = 150;
var data;
var h2 = document.getElementsByTagName('h2');
var Praca = true;
var EnviarAtaque = true;

for (i = 0; i < h2.length; i++) {
    if (h2[i].innerHTML == "Praça de Reuniões (nível 1)") {
        Praca = true;
    } else if (h2[i].innerHTML.search("Confirmar ataque a") != -1) {
        EnviarAtaque = true;
    }
} if (Praca == EnviarAtaque)
    var tentCookie = document.cookie.match('(^|;) ?' + cookieNameTent + '=([^;]*)(;|$)');
if (tentCookie !== null) {
    var numTentativas = parseInt(tentCookie[2]);
} else {
    data = new Date(2019, 11, 11);
    document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();
} if (Praca) {
    if (document.getElementsByClassName("error_box")[0] !== undefined) {
        var erroFaltaUnid = document.getElementsByClassName("error_box");
        for (i = 0; i < erroFaltaUnid.length && !found; i++) {
            if (erroFaltaUnid[i].innerHTML.search("Não existem unidades suficientes") != -1) {
                document.getElementById("village_switch_right").click();
                throw '';
            }
        }
    }
    if (doc.forms[0].x.value !== "") {
        var numAtaques = 0;
        numAtaquesCookies = document.cookie.match('(^|;) ?' + cookieNumAtaques + '=([^;]*)(;|$)');
        if (numAtaquesCookies !== null) {
            numAtaques = parseInt(numAtaquesCookies[2]);
        }
        if (numAtaques >= maxTentativas) {
            numAtaques = 0;
        }
        numAtaques = numAtaques + 1;
        cookie_date = new Date(2019, 11, 11);
        document.cookie = cookieNumAtaques + "=" + numAtaques + ";expires=" + cookie_date.toGMTString();

        /******************/
        var index = 0;
        farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
        if (farmcookie !== null) {
            index = parseInt(farmcookie[2]);
        }
        if (index >= coords.length) {
            index = 0;
        }
        index = index + 1;
        cookie_date = new Date(2019, 11, 11);
        document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
        var link = document.getElementsByClassName("quickbar_link");

        for (i = 0; i < link.length; i++) {
            if (link[i].href.search(/screen=place/) != -1) {
                window.location.href = link[i].href;
            }
        }
    } else {
        if (window.frames.length > 0) {
            doc = window.main.document;
        }
        url = document.URL;
        coords = coords.split(" ");
        var index = 0;
        farmcookie = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');

        if (farmcookie !== null) {
            index = parseInt(farmcookie[2]);
        }

        if (index >= coords.length) {
            index = 0;
        }
        /*****************/
        url = document.URL;
        var numAtaques = 0;
        numAtaquesCookies = document.cookie.match('(^|;) ?' + cookieNumAtaques + '=([^;]*)(;|$)');

        if (numAtaquesCookies !== null) {
            numAtaques = parseInt(numAtaquesCookies[2]);
        }

        if (numAtaques >= maxTentativas) {
            numAtaques = 0;
        }
        /*****************/

        /*if (document.getElementsByClassName("command-list-count") [0] !== undefined){
            var numAtaques = document.getElementsByClassName("command-list-count") [0].innerHTML;
        }else {
            var numAtaques = 0;
        }*/

        if (numAtaques < FakesPorAldeia) {
            if (numTentativas <= maxTentativas) {

                numAtaques = numAtaques + 1;
                coords = coords[index];
                coords = coords.split("|");
                index = index + 1;
                cookie_date = new Date(2019, 11, 11);
                document.cookie = cookieName + "=" + index + ";expires=" + cookie_date.toGMTString();
                doc.forms[0].x.value = coords[0];
                doc.forms[0].y.value = coords[1];
                doc.forms[0].spy.value = scout;
                doc.forms[0].spear.value = sp;
                doc.forms[0].sword.value = sw;
                doc.forms[0].axe.value = ax;
                doc.forms[0].spy.value = scout;
                doc.forms[0].light.value = lc;
                doc.forms[0].heavy.value = hv;
                doc.forms[0].ram.value = ra;
                doc.forms[0].catapult.value = cat;
                document.forms[0].attack.click();
            } else {
                data = new Date(2019, 11, 11);
                document.cookie = cookieNameTent + "=0;expires=" + data.toGMTString();
                document.getElementById("village_switch_right").click();
            }
            //aqui começa a minha correção ao max tentativas
            //numAtaques +=1;
        } else {
            document.getElementById("village_switch_right").click();
        }
    }
} else if (EnviarAtaque) {
    var BNCheck = document.getElementsByClassName("error");
    var found = true;
    for (i = 0; i < BNCheck.length && !found; i++) {
        if (BNCheck[i].innerHTML == "lol!") {
            found = true;
        }
    }
    if (found) {
        var link = document.getElementsByClassName("quickbar_link");
        for (i = 0; i < link.length; i++) {
            if (link[i].href.search(/screen=place/) != -1) {
                numTentativas = numTentativas + 10;
                data = new Date(2019, 11, 11);
                document.cookie = cookieNameTent + "=" + numTentativas + ";expires=" + data.toGMTString();
                window.location.href = link[i].href;
            }
        }
    } else {
        docs.forms[0].troop_confirm_go.click();
    }
} else {
    alert("Corra o script apartir da praça de reuniões");
}
doc = document;

if (window.frames.length > 0)
    doc = window.main.document;
url = document.URL;
if (url.indexOf('try=confirm') > 1) {
    doc.forms[0].troop_confirm_go.click();
}
doc.forms[0].attack.click();