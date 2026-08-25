function mostrar(tipo) {

    const mensagem = document.getElementById("mensagem");

    mensagem.className = "mensagem";

    void mensagem.offsetWidth;

    mensagem.classList.add("mensagemAnimada");


    if (tipo === "saudade") {

        mensagem.innerText =
        "Se você está com saudade, imagina que eu estou aí agora te dando aquele abraço apertado que a distância não deixa eu te dar. 🫂❤️";

        efeitoSaudade();
    }


    if (tipo === "triste") {

        mensagem.innerText =
        "Se você estiver triste, lembra que você não precisa enfrentar tudo sozinha. Espero que esse pequeno cantinho consiga pelo menos colocar um sorriso no seu rosto. ❤️";

        efeitoSuave();
    }


    if (tipo === "sorriso") {

        mensagem.innerText =
        "POR QUE VOCÊ CLICOU? KKKKKKK 😂😂😂 Agora você tem que sorrir. Essa foi a regra.";

        efeitoSorriso();
    }


    if (tipo === "especial") {

        mensagem.innerText =
        "Uma coisa que eu gosto muito em você é o jeito que você consegue tornar nossas conversas especiais, mesmo estando tão longe. ❤️";

        efeitoEspecial();
    }


    if (tipo === "oracao") {

        mensagem.innerText =
        "Que Jesus cuide de nós, da nossa caminhada e principalmente de você. Que Nossa Senhora te cubra com seu manto e te proteja sempre. 🙏❤️";

        efeitoOracao();
    }
}


/* CARTA */

function abrirCarta() {

    const carta = document.getElementById("carta");

    carta.style.display = "block";

    carta.scrollIntoView({
        behavior: "smooth"
    });

    criarCoracoes();
}


/* SURPRESA */

function surpresa() {

    const surpresaBox = document.getElementById("surpresa");

    surpresaBox.innerHTML = "";

    surpresaBox.style.display = "block";

    document.body.classList.remove("telaImpacto");

    void document.body.offsetWidth;

    document.body.classList.add("telaImpacto");

    chuvaDeCoracoes();


    setTimeout(() => {

        surpresaBox.innerHTML = `
            <div class="surpresaTexto">
                😳<br>
                <strong>EU AVISEI PARA NÃO CLICAR! 😂❤️</strong>
            </div>
        `;

    }, 300);


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


    setTimeout(() => {

        surpresaBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 400);
}


/* EFEITOS DOS BOTÕES */

function efeitoSaudade() {

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {
            criarUmCoracao();
        }, i * 120);

    }
}


function efeitoSuave() {

    for (let i = 0; i < 5; i++) {

        setTimeout(() => {
            criarUmCoracao();
        }, i * 250);

    }
}


function efeitoSorriso() {

    for (let i = 0; i < 10; i++) {

        setTimeout(() => {

            criarEmoji("😂");

        }, i * 100);

    }
}


function efeitoEspecial() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            criarCoracaoGrande();

        }, i * 100);

    }
}


function efeitoOracao() {

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            criarEmoji("✨");

        }, i * 180);

    }
}


/* CORAÇÕES */

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


/* CORAÇÃO GRANDE */

function criarCoracaoGrande() {

    const coracao = document.createElement("div");

    coracao.className = "coracao grande";

    coracao.innerText = "❤️";

    coracao.style.left =
        Math.random() * 100 + "vw";

    coracao.style.fontSize = "40px";

    document.body.appendChild(coracao);

    setTimeout(() => {

        coracao.remove();

    }, 6500);
}


/* EMOJIS */

function criarEmoji(emoji) {

    const elemento = document.createElement("div");

    elemento.className = "coracao";

    elemento.innerText = emoji;

    elemento.style.left =
        Math.random() * 100 + "vw";

    elemento.style.fontSize = "30px";

    document.body.appendChild(elemento);

    setTimeout(() => {

        elemento.remove();

    }, 6500);
}
