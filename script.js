/* =========================
   TELA DE ENTRADA
========================= */

function entrarNoSite() {

    const tela = document.getElementById("telaEntrada");

    tela.classList.add("saindo");

    criarCoracoes(12);

    setTimeout(function () {

        tela.style.display = "none";

    }, 800);
}


/* =========================
   MENSAGENS
========================= */

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

    criarCoracoes(10);
}


/* =========================
   ENVELOPE
========================= */

function mostrarEnvelope() {

    const area = document.getElementById("area-envelope");

    area.style.display = "block";

    area.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    criarCoracoes(8);
}


function abrirCarta() {

    const envelope = document.querySelector(".envelope");
    const area = document.getElementById("area-envelope");
    const carta = document.getElementById("carta");

    if (envelope.classList.contains("aberto")) {
        return;
    }

    envelope.classList.add("aberto");

    criarCoracoes(15);

    setTimeout(function () {

        area.style.display = "none";

        carta.style.display = "block";

        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        criarCoracoes(12);

    }, 900);
}


/* =========================
   SURPRESA
========================= */

function surpresa() {

    const elemento = document.getElementById("surpresa");
    const texto = document.getElementById("surpresaTexto");

    elemento.style.display = "block";

    texto.innerHTML = "";

    criarCoracoes(30);

    elemento.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    setTimeout(function () {

        texto.innerHTML =
            "😳 EU AVISEI PARA NÃO CLICAR!";

    }, 300);


    setTimeout(function () {

        texto.innerHTML =
            "😳 EU AVISEI PARA NÃO CLICAR! 😂❤️<br><br>" +
            "Tá bom...";

    }, 1500);


    setTimeout(function () {

        texto.innerHTML =
            "😳 EU AVISEI PARA NÃO CLICAR! 😂❤️<br><br>" +
            "Mas já que você clicou...";

    }, 2800);


    setTimeout(function () {

        texto.innerHTML =
            "😳 EU AVISEI PARA NÃO CLICAR! 😂❤️<br><br>" +
            "Mas já que você clicou...<br><br>" +
            "Eu só queria dizer:<br><br>" +
            "<strong>Você é muito especial para mim. ❤️</strong>";

        criarCoracoes(35);

    }, 4100);
}


/* =========================
   CORAÇÕES
========================= */

function criarCoracoes(quantidade) {

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

    for (let i = 0; i < quantidade; i++) {

        const coracao = document.createElement("div");

        coracao.className = "coracao";

        coracao.innerText =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        coracao.style.left =
            Math.random() * 100 + "vw";

        coracao.style.fontSize =
            (18 + Math.random() * 25) + "px";

        coracao.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        coracao.style.animationDelay =
            (Math.random() * 0.8) + "s";

        document.body.appendChild(coracao);


        setTimeout(function () {

            coracao.remove();

        }, 8500);
    }
}


/* =========================
   MODO NOITE
========================= */

function modoNoite() {

    document.body.classList.toggle("modo-noite");

    const botao = document.querySelector(".botao-noite");

    if (document.body.classList.contains("modo-noite")) {

        botao.innerText = "☀️";

    } else {

        botao.innerText = "🌙";
    }
}


/* =========================
   MENSAGEM DE BOAS-VINDAS
========================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const mensagem = document.createElement("div");

        mensagem.className = "mensagem-boas-vindas";

        mensagem.innerHTML =
            "Antes de clicar em qualquer coisa...<br>" +
            "só queria que você soubesse que eu fiz isso pensando em você. ❤️";

        document.body.appendChild(mensagem);


        setTimeout(function () {

            mensagem.remove();

        }, 5200);

    }, 900);
});
