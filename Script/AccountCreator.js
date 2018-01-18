var url = "";
var mundo = "";

const caracteres = "abcdefghijklmnopqrstuvxzwy";
var nameLength = Math.floor(Math.random() * 10) + 5;
const criarConta = "?ref=player_invite_linkrl";
const escolherMundo = "?welcome=1";
const logado = "?screen=overview&intro";

$(window).load(function () {
    var urlAtual = window.location.href;

    if (urlAtual.indexOf(criarConta) !== -1) {
        console.log("criou a conta");
        CriarConta();

    }

    if (urlAtual.indexOf(escolherMundo) !== -1) {
        console.log("escolheu o mundo");
        AcessarMundo();
    }

    if (urlAtual.indexOf(logado) !== -1) {
        console.log("voltou pro inicio");
        window.location.href = url;
    }
});

//primeiro passo, preencher o form para criar a conta
function CriarConta() {
    var name = "";

    for (let i = 0; i < nameLength; i++) {
        let randomNumber = Math.floor(Math.random() * 25);
        name += caracteres[randomNumber];
    }

    $("#register_username").val(name);
    $("#register_password").val(name + "1234");
    $("#register_email").val(name + "@" + name + ".com");
    $("#terms").prop("checked", true);

    $(".btn-register").on("click", function (e) {
        e.preventDefault();

        $(":submit").click();

    });

    $(".btn-register").trigger("click");
}

//acessa o mundo
function AcessarMundo() {
    $("a").each(function () {
        if (this.href.endsWith(mundo)) {
            window.location.href = this.href;
        }
    });
}
