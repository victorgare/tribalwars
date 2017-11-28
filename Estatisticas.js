var players = [];

$(document).ready(function () {

    //recupera a lista de jogadores do mapa
    players = TWMap.players;

    gerarModal(players);

});

function gerarModal(data) {

    var body = document.getElementById("ds_body");

    var divPopUp = document.createElement("div");
    divPopUp.id = "meuPopUp";
    divPopUp.className = "popup_box show";
    divPopUp.style.maxWidth = "90%";

    var divPopUpContent = document.createElement("div");
    divPopUpContent.className = "popup_box_content";
    divPopUp.style.maxHeight = "100%";
    divPopUp.style.width = "100%";
    divPopUp.style.overflowY = "auto";

    var linkClose = document.createElement("a");
    linkClose.innerHTML = "&nbsp;";
    linkClose.className = "popup_box_close";
    linkClose.href = "#";

    var tablePlayers = document.createElement("table");

    var tBody = document.createElement("tbody");

    //faz um foreach pelo array de objetos baixo
    //enviando um objeto por vez pra ser gerado a linha da tabela
    for (key in data) {
        tBody.appendChild(generateTBody(data[key], key));
    }

    tablePlayers.appendChild(tBody);
    divPopUpContent.appendChild(linkClose);
    divPopUpContent.appendChild(tablePlayers);
    divPopUp.appendChild(divPopUpContent);
    body.appendChild(divPopUp);
}

function generateTBody(data, key) {
    var tr = document.createElement("tr");
    //tr.className = "nowrap";

    var td_nome = document.createElement("td");
    td_nome.innerHTML = data.name;

    var td_pontos = document.createElement("td");
    var image_pontos = document.createElement("img");
    image_pontos.src = "https://br.twstats.com/image.php?type=playergraph&graph=points&id=" + key + "&s=br86";

    td_pontos.appendChild(image_pontos);


    var td_oda = document.createElement("td");
    var image_oda = document.createElement("img");
    image_oda.src = "https://br.twstats.com/image.php?type=playergraph&graph=oda&id=" + key + "&s=br86";

    td_oda.appendChild(image_oda);

    var td_odd = document.createElement("td");
    var image_odd = document.createElement("img");
    image_odd.src = "https://br.twstats.com/image.php?type=playergraph&graph=odd&id=" + key + "&s=br86";

    td_odd.appendChild(image_odd);


    tr.appendChild(td_nome);
    tr.appendChild(td_pontos);
    tr.appendChild(td_oda);
    tr.appendChild(td_odd);

    return tr;
}