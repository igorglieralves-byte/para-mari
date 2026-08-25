function mostrar(tipo) {

    const mensagem = document.getElementById("mensagem");

    mensagem.className = "mensagem";

    void mensagem.offsetWidth;

    mensagem.classList.add("mensagemAnimada");

    if (tipo === "saudade") {

        mensagem.innerHTML = `
            <div class="iconeMensagem">🫂</div>

            <strong>Eu também estou com saudade... ❤️</strong>

            <br><br>

            Imagina que eu estou aí agora,
            te dando aquele abraço apertado
            que a distância não deixa eu te dar.

            <br><br>

            🫂❤️
        `;

        efeitoSaudade();
    }

    if (tipo === "triste") {

        mensagem.innerHTML = `
            <div class="iconeMensagem">😔</div>

            <strong>Ei... fica bem. ❤️</strong>

            <br><br>

            Se hoje estiver difícil,
            respira um pouquinho.

            <br><br>

            Você não precisa estar bem
            o tempo todo.

            <br><br>

            Estou torcendo para você sorrir novamente. 🥹❤️
        `;

        efeitoSuave();
    }

    if (tipo === "sorriso") {

        mensagem.innerHTML = `
            <div class="iconeMensagem">😂</div>

            <strong>VOCÊ CLICOU MESMO KKKKKKK</strong>

            <br><br>

            Pronto.

            <br><br>

            Agora você é oficialmente
            obrigada a sorrir. 😂

            <br><br>

            Não fui eu que inventei a regra. 🤷‍♂️😂
        `;

        efeitoSorriso();
    }

    if (tipo === "especial") {

        mensagem.innerHTML = `
            <div class="iconeMensagem">❤️</div>

            <strong>Uma coisa sobre você...</strong>

            <br><br>

            Você tem um jeito de tornar
            até uma conversa simples
            em alguma coisa especial.

            <br><br>

            E mesmo estando longe,
            você conseguiu se tornar
            uma pessoa muito importante para mim.

            <br><br>

            ❤️🥹❤️
        `;

        efeitoEspecial();
    }

    if (tipo === "oracao") {

        mensagem.innerHTML = `
            <div class="iconeMensagem">🙏</div>

            <strong>Nosso momento com Deus</strong>

            <br><br>

            Que Jesus cuide de nós,
            da nossa caminhada
            e principalmente de você.

            <br><br>

            Que Nossa Senhora te cubra
            com seu manto e te proteja sempre.

            <br><br>

            🙏✨❤️
        `;

        efeitoOracao();
    }
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


/* EFEITOS DAS MENSAGENS */

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


/* CRIA CORAÇÃO */

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
