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

    mensagem.classList.remove("mensagemAnimada");

    void mensagem.offsetWidth;

    mensagem.classList.add("mensagemAnimada");

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

    const surpresaBox = document.getElementById("surpresa");

    // Limpa qualquer conteúdo anterior
    surpresaBox.innerHTML = "";

    // Mostra a caixa
    surpresaBox.style.display = "block";

    // Faz a tela tremer
    document.body.classList.remove("telaImpacto");

    void document.body.offsetWidth;

    document.body.classList.add("telaImpacto");

    // Começa a chuva de corações
    chuvaDeCoracoes();

    // Primeiro texto
    setTimeout(() => {

        surpresaBox.innerHTML = `
            <div class="surpresaTexto">
                😳<br>
                <strong>EU AVISEI PARA NÃO CLICAR! 😂❤️</strong>
            </div>
        `;

    }, 300);


    // Segundo texto
    setTimeout(() => {

        surpresaBox.innerHTML = `
            <div class="surpresaTexto">
                😳<br>
                <strong>EU AVISEI PARA NÃO CLICAR! 😂❤️</strong>

                <br><br>

                Tá bom... você venceu. 😂
            </div>
        `;

    }, 1800);


    // Terceiro texto
    setTimeout(() => {

        surpresaBox.innerHTML = `
            <div class="surpresaTexto">
                😳<br>
                <strong>EU AVISEI PARA NÃO CLICAR! 😂❤️</strong>

                <br><br>

                Tá bom... você venceu. 😂

                <br><br>

                Mas já que você clicou...
            </div>
        `;

    }, 3300);


    // Mensagem final
    setTimeout(() => {

        surpresaBox.innerHTML = `
            <div class="surpresaTexto">

                😳<br>

                <strong>EU AVISEI PARA NÃO CLICAR! 😂❤️</strong>

                <br><br>

                Tá bom... você venceu. 😂

                <br><br>

                Mas já que você clicou...

                <br><br>

                <span class="mensagemFinal">
                    Você é muito especial para mim. ❤️
                </span>

                <br><br>

                🥹❤️

            </div>
        `;

        chuvaDeCoracoes();

    }, 4800);


    // Leva até a surpresa
    setTimeout(() => {

        surpresaBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 400);
}


function criarCoracoes() {

    for (let i = 0; i < 8; i++) {

        criarUmCoracao();

    }
}


function chuvaDeCoracoes() {

    for (let i = 0; i < 45; i++) {

        setTimeout(() => {

            criarUmCoracao();

        }, i * 60);

    }
}


function criarUmCoracao() {

    const coracao = document.createElement("div");

    coracao.className = "coracao";

    coracao.innerText = "❤️";

    coracao.style.left =
        Math.random() * 100 + "vw";

    coracao.style.fontSize =
        (18 + Math.random() * 25) + "px";

    coracao.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    document.body.appendChild(coracao);

    setTimeout(() => {

        coracao.remove();

    }, 6500);
}
