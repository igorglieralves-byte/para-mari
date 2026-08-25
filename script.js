/* MENSAGEM AUTOMÁTICA AO ENTRAR */

window.addEventListener("load", function () {

    const mensagemBoasVindas =
        document.createElement("div");

    mensagemBoasVindas.className =
        "mensagem-boas-vindas";

    mensagemBoasVindas.innerHTML =
        "Antes de clicar em qualquer coisa...<br>" +
        "só queria que você soubesse que eu fiz isso pensando em você. ❤️";

    document.body.appendChild(mensagemBoasVindas);

    setTimeout(function () {

        mensagemBoasVindas.remove();

    }, 5200);

});
