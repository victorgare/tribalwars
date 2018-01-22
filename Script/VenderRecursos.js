//Vende recursos por pontos premiun
var altAldTempo = aleatorio(10000, 100000);
var qtdDisponivelTransporte;

//recursos disponiveis na aldeia
var qtdMadeiraAldeia;
var qtdArgilaAldeia;
var qtdFerroAldeia;

//capacidade maxima de cada recurso
var capacidadeMadeira;
var capacidadeArgila;
var capacidadeFerro;

//quantidade estocada de cada recurso
var estoqueMandeira;
var estoqueArgila;
var estoqueFerro;

//campos para serem preenchidos
var inputVenderMadeira;
var inputVenderArgila;
var inputVenderFerro;


(function () {
    'use strict';

    qtdDisponivelTransporte = $("#market_merchant_max_transport").text();

    capacidadeMadeira = $("#premium_exchange_capacity_wood").text();
    capacidadeArgila = $("#premium_exchange_capacity_stone").text();
    capacidadeFerro = $("#premium_exchange_capacity_iron").text();

    estoqueMandeira = $("#premium_exchange_stock_wood").text();
    estoqueArgila = $("#premium_exchange_stock_stone").text();
    estoqueFerro = $("#premium_exchange_stock_iron").text();

    inputVenderMadeira = $("input[name='sell_wood']");
    inputVenderArgila = $("input[name='sell_stone']");
    inputVenderFerro = $("input[name='sell_iron']");

    qtdMadeiraAldeia = $("#wood").text();
    qtdArgilaAldeia = $("#stone").text();
    qtdFerroAldeia = $("#iron").text();

    var custoMadeira = calcularCusto("wood");
    var custoArgila = calcularCusto("stone");
    var custoFerro = calcularCusto("iron");


    var qtdTotalRecursos;
    var qtdVenderMadeira = (calcularQuantidadeVender(capacidadeMadeira, estoqueMandeira, qtdMadeiraAldeia, custoMadeira) * custoMadeira);
    var qtdVenderArgila = (calcularQuantidadeVender(capacidadeArgila, estoqueArgila, qtdArgilaAldeia, custoArgila) * custoArgila);
    var qtdVenderFerro = (calcularQuantidadeVender(capacidadeFerro, estoqueFerro, qtdFerroAldeia, custoFerro) * custoFerro);


    if (qtdVenderMadeira > qtdDisponivelTransporte) {
        qtdVenderMadeira = qtdDisponivelTransporte - 1000;
    }
    if (qtdVenderArgila > qtdDisponivelTransporte) {
        qtdVenderMadeira = qtdDisponivelTransporte - 1000;
    }
    if (qtdVenderFerro > qtdDisponivelTransporte) {
        qtdVenderMadeira = qtdDisponivelTransporte - 1000;
    }

    var algoPraVender = false;

    if (qtdVenderFerro > 0 && qtdVenderFerro <= qtdDisponivelTransporte) {
        inputVenderFerro.val(qtdVenderFerro);
        algoPraVender = true;
    } else if (qtdVenderArgila > 0 && qtdVenderArgila <= qtdDisponivelTransporte) {
        inputVenderArgila.val(qtdVenderArgila);
        algoPraVender = true;
    } else if (qtdVenderMadeira > 0 && qtdVenderMadeira <= qtdDisponivelTransporte) {
        inputVenderMadeira.val(qtdVenderMadeira);
        algoPraVender = true;
    } else {
        console.log("Nada para vender hoje");
    }

    if (algoPraVender) {
        setTimeout(calcularMelhorOferta, 2000);
    }
    setInterval(altAldeia, altAldTempo);
})();

function calcularMelhorOferta() {
    $(".btn-premium-exchange-buy").click();

    setTimeout(confirmarVenda, 1000);
}

function confirmarVenda() {
    $(".btn-confirm-yes").click();
}

function calcularQuantidadeVender(capacidade, estoque, qtdDisponivel, custo) {
    var quantidadeVender = 0;
    var capacidadeDisponivel = capacidade - estoque;
    if (capacidadeDisponivel > 0) {
        if (qtdDisponivel >= custo) {
            quantidadeVender = Math.ceil(qtdDisponivel / custo) - 1;
        }
    }

    return quantidadeVender;
}

function calcularCusto(tipoRecurso) {
    var capacidade = PremiumExchange.data.capacity[tipoRecurso];
    var stock = PremiumExchange.data.stock[tipoRecurso];

    var fator = (PremiumExchange.data.tax.buy, PremiumExchange.calculateMarginalPrice(stock, capacidade));
    var resultado = Math.floor(1 / fator);

    return resultado;
}

function altAldeia() {
    //$('.arrowRight').click();
    //$('.groupRight').click();
    location.reload(true);
}

function aleatorio(superior, inferior) {
    numPosibilidades = superior - inferior;
    aleat = Math.random() * numPosibilidades;
    return Math.round(parseInt(inferior) + aleat);
}
