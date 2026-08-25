function mostrar(tipo) {

    const mensagem = document.getElementById("mensagem");

    if (tipo === "saudade") {

        mensagem.innerText =
            "Se você está com saudade, imagina que eu estou aí agora te dando aquele abraço apertado que a distância não deixa eu te dar. 🫂❤️";

    } else if (tipo === "triste") {

        mensagem.innerText =
            "Se você estiver triste, lembra que você não precisa enfrentar tudo sozinha. Espero que esse pequeno cantinho consiga pelo menos colocar um sorriso no seu rosto. ❤️";

    } else if (tipo === "sorriso") {

        mensagem.innerText =
            "POR QUE VOCÊ CLICOU? KKKKKKK 😂😂😂 Agora você tem que sorrir. Essa foi a regra.";

    } else if (tipo === "especial") {

        mensagem.innerText =
            "Uma coisa que eu gosto muito em você é o jeito que você consegue tornar nossas conversas especiais, mesmo estando tão longe. ❤️";

    } else if (tipo === "oracao") {

        mensagem.innerText =
            "Que Jesus cuide de nós, da nossa caminhada e principalmente de você. Que Nossa Senhora te cubra com seu manto e te proteja sempre. 🙏❤️";
    }

    mensagem.classList.remove("mensagemAnimada");

    void mensagem.offsetWidth;

    mensagem.classList.add("mensagemAnimada");

    criarCoracoes();
}


function mostrarEnvelope() {

    const areaEnvelope = document.getElementById("area-envelope");
    const carta = document.getElementById("carta");

    areaEnvelope.style.display = "block";
    carta.style.display = "none";

    areaEnvelope.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    criarCoracoes();
}


function abrirCarta() {

    const envelope = document.querySelector(".envelope");
    const areaEnvelope = document.getElementById("area-envelope");
    const carta = document.getElementById("carta");

    if (envelope.classList.contains("aberto")) {
        return;
    }

    envelope.classList.add("aberto");

    criarCoracoes();

    setTimeout(function () {

        areaEnvelope.style.display = "none";
        carta.style.display = "block";

        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        criarCoracoes();

    }, 900);
}


function surpresa() {

    const elementoSurpresa = document.getElementById("surpresa");

    elementoSurpresa.style.display = "block";

    elementoSurpresa.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    criarCoracoes();
}


function criarCoracoes() {

    const simbolos = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞",
        "✨",
        "💫"
    ];

    for (let i = 0; i < 18; i++) {

        const coracao = document.createElement("div");

        coracao.className = "coracao";

        coracao.innerText =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        coracao.style.left =
            Math.random() * 100 + "vw";

        coracao.style.fontSize =
            18 + Math.random() * 22 + "px";

        coracao.style.animationDuration =
            3 + Math.random() * 4 + "s";

        coracao.style.animationDelay =
            Math.random() * 0.8 + "s";

        document.body.appendChild(coracao);

        setTimeout(function () {
            coracao.remove();
        }, 8000);
    }
}


function modoNoite() {

    const corpo = document.body;
    const botao = document.querySelector(".botao-noite");

    corpo.classList.toggle("modo-noite");

    if (corpo.classList.contains("modo-noite")) {

        botao.innerText = "☀️";

    } else {

        botao.innerText = "🌙";
    }
}


window.addEventListener("load", function () {

    const mensagemBoasVindas = document.createElement("div");

    mensagemBoasVindas.className = "mensagem-boas-vindas";

    mensagemBoasVindas.innerHTML =
        "Antes de clicar em qualquer coisa...<br>" +
        "só queria que você soubesse que eu fiz isso pensando em você. ❤️";

    document.body.appendChild(mensagemBoasVindas);

    setTimeout(function () {

        mensagemBoasVindas.remove();

    }, 5200);
});
