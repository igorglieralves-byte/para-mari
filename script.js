function mostrar(tipo) {

    const mensagem = document.getElementById("mensagem");

    if (tipo === "saudade") {

        mensagem.innerText =
        "Se você está com saudade, imagina que eu estou aí agora te dando aquele abraço apertado que a distância não deixa eu te dar. 🫂❤️";

    }

    if (tipo === "triste") {

        mensagem.innerText =
        "Se você estiver triste, lembra que você não precisa enfrentar tudo sozinha. Espero que esse pequeno cantinho consiga pelo menos colocar um sorriso no seu rosto. ❤️";

    }

    if (tipo === "sorriso") {

        mensagem.innerText =
        "POR QUE VOCÊ CLICOU? KKKKKKK 😂😂😂 Agora você tem que sorrir. Essa foi a regra.";

    }

    if (tipo === "especial") {

        mensagem.innerText =
        "Uma coisa que eu gosto muito em você é o jeito que você consegue tornar nossas conversas especiais, mesmo estando tão longe. ❤️";

    }

    if (tipo === "oracao") {

        mensagem.innerText =
        "Que Jesus cuide de nós, da nossa caminhada e principalmente de você. Que Nossa Senhora te cubra com seu manto e te proteja sempre. 🙏❤️";

    }

    criarCoracoes();

}


function abrirCarta() {

    const carta = document.getElementById("carta");

    carta.style.display = "block";

    carta.scrollIntoView({
        behavior: "smooth"
    });

    criarCoracoes();

}


function surpresa() {

    const surpresa = document.getElementById("surpresa");

    surpresa.style.display = "block";

    surpresa.scrollIntoView({
        behavior: "smooth"
    });

    criarCoracoes();

}


function criarCoracoes() {

    for (let i = 0; i < 8; i++) {

        const coracao = document.createElement("div");

        coracao.className = "coracao";

        coracao.innerText = "❤️";

        coracao.style.left =
        Math.random() * 100 + "vw";

        coracao.style.animationDuration =
        (3 + Math.random() * 3) + "s";

        document.body.appendChild(coracao);

        setTimeout(() => {

            coracao.remove();

        }, 6000);

    }

}