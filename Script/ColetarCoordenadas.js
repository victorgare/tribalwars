$(document).ready(function () {
    //let coords = getCoordedadas();

    var button = document.createElement('button');

    button.addEventListener("click", getCoordedadas);
    button.innerText = "Coletar Coordenadas";
    button.style.textAlign = "center";
    button.className = "btn btn-instant-free";

    var div = document.createElement('div');

    div.style.display = "unset";
    div.style.marginLeft = "10px"

    div.appendChild(button);

    var continente = document.getElementById("content_value");
    continente.insertBefore(div, continente.firstChild);
});

function getCoordedadas() {
    let villages = TWMap.villages;
    let vk = TWMap.villageKey;
    let key = {};
    let bbs = "";
    let contador = 0;

    for (j in vk) {
        key[contador] = vk[j];
        contador++;
    }

    contador = 0;
    for (var k in key) {
        var village = villages[key[k]];
        if (village.owner == "0") {
            var coordAtual = TWMap.CoordByXY(key[k]);

            bbs += coordAtual[0] + "|" + coordAtual[1] + " ";

            contador++;
        }
    }

    alert(bbs);
    return bbs;
}