//quantidade atual de recursos na aldeia
var madeiraAldeia;
var argilaAldeia;
var ferroAldeia;

//quantidade de recursos por PP no mercado
var taxaMadeira;
var taxaArgila;
var taxaFerro;

$(window).on("load", function () {
    //preenche o valor dos recursos atuais da aldeia
    madeiraAldeia = $("#wood").text();
    argilaAldeia = $("#stone").text();
    ferroAldeia = $("#iron").text();

    //preenche o valor da taxa atual do mercado
    taxaMadeira = PremiumExchange.calculateRateForOnePoint("wood");
    taxaArgila = PremiumExchange.calculateRateForOnePoint("stone");
    taxaFerro = PremiumExchange.calculateRateForOnePoint("iron");

    AdicionaPainelConfiguracoes();

    //no click do botao salvar, atualiza as configuracoes
    $("#btnSalvar").click(function () {
        var limiteMadeira = $("#limiteComprarMadeira").val();
        var limiteArgila = $("#limiteComprarArgila").val();
        var limiteFerro = $("#limiteComprarFerro").val();

        SetCookiesPainel("wood", limiteMadeira);
        SetCookiesPainel("stone", limiteArgila);
        SetCookiesPainel("iron", limiteFerro);
        
        location.reload();
    });
});


function GetCookiesPainel(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            var value = c.substring(name.length, c.length);

            if (value === '') {
                return 0;
            }
            return value;
        }
    }
    return 0;
}

function SetCookiesPainel(key, value) {
    document.cookie = key + "=" + value;
}

//ira criar o painel com as configuracoes do script
function AdicionaPainelConfiguracoes() {
    var body = $("#ds_body");
    var divPainel = $('<div class="quest" style="position: fixed;top: 65px;left: 84%; width: 15%; height: auto; margin-top: 0;text-align: center;" id="painelConfiguracoes"> </div>');

    var labelLimiteComprarMadeira = $('<label class="label label-warning">Limite comprar <span class="icon header wood"> </span></label>');
    var txtLimiteComprarMadeira = $('<input type="text" id="limiteComprarMadeira" value="' + GetCookiesPainel("wood") + '" /> </br>');

    var labelLimiteComprarArgila = $('<label class="label label-warning">Limite comprar <span class="icon header stone"> </span></label>');
    var txtLimiteComprarArgila = $('<input type="text" id="limiteComprarArgila" value="' + GetCookiesPainel("stone") + '"/>  </br>');

    var labelLimiteComprarFerro = $('<label class="label label-warning">Limite comprar <span class="icon header iron"> </span></label>');
    var txtLimiteComprarFerro = $('<input type="text" id="limiteComprarFerro" value="' + GetCookiesPainel("iron") + '"/>  </br>');

    var btnSalvar = $('</br></br> <input type="button" class="btn" id="btnSalvar" value="Salvar"/>');

    divPainel.append(labelLimiteComprarMadeira);
    divPainel.append(txtLimiteComprarMadeira);

    divPainel.append(labelLimiteComprarArgila);
    divPainel.append(txtLimiteComprarArgila);

    divPainel.append(labelLimiteComprarFerro);
    divPainel.append(txtLimiteComprarFerro);


    divPainel.append(btnSalvar);

    body.append(divPainel);
}

function CalcularComprarVender(valorTaxa) {
    if (valorTaxa <= 250) {
        return "comprar";
    }

    if (valorTaxa >= 300) {
        return "vender";
    }

    return "aguardar";
}

function CalcularMelhorTaxaComprar(taxaMadeira, taxaArgila, taxaFerro) {
    let ordemComprar = [];

    if (taxaMadeira > taxaArgila && taxaArgila > taxaFerro) {
        ordemComprar[0] = "madeira";
        ordemComprar[1] = "argila";
        ordemComprar[2] = "ferro";
    }

    if (taxaFerro > taxaMadeira && taxaMadeira > taxaArgila) {
        ordemComprar[0] = "ferro";
        ordemComprar[1] = "madeira";
        ordemComprar[2] = "argila";
    }

    if (taxaArgila > taxaFerro && taxaFerro > taxaMadeira) {
        ordemComprar[0] = "argila";
        ordemComprar[1] = "ferro";
        ordemComprar[2] = "madeira";
    }

    return ordemComprar;
}

function CalcularMelhorTaxaVender(taxaMadeira, taxaArgila, taxaFerro) {
    let ordemVender = [];

    if (taxaMadeira > taxaArgila && taxaArgila > taxaFerro) {
        ordemComprar[0] = "madeira";
        ordemComprar[1] = "argila";
        ordemComprar[2] = "ferro";
    }

    if (taxaFerro > taxaMadeira && taxaMadeira > taxaArgila) {
        ordemComprar[0] = "ferro";
        ordemComprar[1] = "madeira";
        ordemComprar[2] = "argila";
    }

    if (taxaArgila > taxaFerro && taxaFerro > taxaMadeira) {
        ordemComprar[0] = "argila";
        ordemComprar[1] = "ferro";
        ordemComprar[2] = "madeira";
    }

    return ordemComprar;
}