(function () {

    var villages = TWMap.villages;
    var vk = TWMap.villageKey;
    var key = {};
    var contador = 0;
    var bbs = "";

    $(document).ready(function () {
        for (j in vk) {
            key[contador] = vk[j];
            contador++;
        }

        contador = 0;
        for (var k in key) {
            var village = villages[key[k]];
            if (village.owner == "0") {
                var coordAtual = TWMap.CoordByXY(key[k]);
                console.log(coordAtual[0]);

                bbs += coordAtual[0] + "|" + coordAtual[1] + " ";
                //TWMap.mapHandler.onClick(coordAtual[0], coordAtual[1], new Event('click'));

                //var url = TWMap.urls.ctx["mp_farm_a"].replace(/__village__/, villageA.id).replace(/__source__/, game_data.village.id);

                //TribalWars.get(url, null, function(a){TWMap.context.ajaxDone(null,url);}, undefined, undefined);

                contador++;
            }
        }

        alert(bbs);
    });
})()
