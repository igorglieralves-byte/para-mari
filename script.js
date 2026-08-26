/* =========================
   CATEGORIAS
========================= */

function abrirCategoria(id) {

    const categoria = document.getElementById(id);

    const todas = document.querySelectorAll(
        ".opcoes-categoria"
    );

    todas.forEach(function (item) {

        if (item.id !== id) {
            item.classList.remove("aberta");
        }

    });

    categoria.classList.toggle("aberta");
}


/* =========================
   CONTROLE DA MENSAGEM
========================= */

let tempoMensagem;


/* =========================
   TELA DE ENTRADA
========================= */

function entrarNoSite() {

    const tela =
        document.getElementById("telaEntrada");

    tela.classList.add("saindo");

    criarCoracoes(12);

    setTimeout(function () {

        tela.style.display = "none";

    }, 800);
}


/* =========================
   MOSTRAR MENSAGEM
========================= */

function mostrar(tipo) {

    const mensagem =
        document.getElementById("mensagem");

    clearTimeout(tempoMensagem);

    mensagem.classList.remove(
        "mensagemAnimada"
    );

    mensagem.style.opacity = "0";

    setTimeout(function () {

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

        mensagem.style.opacity = "1";

        animarMensagem();

        criarCoracoes(10);

        tempoMensagem =
            setTimeout(function () {

                mensagem.style.opacity = "0";

            }, 6000);

    }, 300);
}


/* =========================
   ANIMAÇÃO DA MENSAGEM
========================= */

function animarMensagem() {

    const mensagem =
        document.getElementById("mensagem");

    mensagem.classList.remove(
        "mensagemAnimada"
    );

    void mensagem.offsetWidth;

    mensagem.classList.add(
        "mensagemAnimada"
    );

    mensagem.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================
   MOTIVOS
========================= */

function motivos() {

    const mensagem =
        document.getElementById("mensagem");

    clearTimeout(tempoMensagem);

    mensagem.style.opacity = "1";

    const motivos = [

        "Seu jeito de ser. ❤️",

        "Seu sorriso. 🥹",

        "A forma como você consegue deixar uma conversa simples especial.",

        "Seu carinho. 💕",

        "A maneira como você se importa com as pessoas.",

        "Seu jeitinho que é só seu. ❤️",

        "E principalmente... você ser você mesma. 🌷"

    ];

    mensagem.innerHTML = "";

    let indice = 0;

    function mostrarMotivo() {

        if (indice >= motivos.length) {

            tempoMensagem =
                setTimeout(function () {

                    mensagem.style.opacity = "0";

                }, 3500);

            return;
        }

        mensagem.innerHTML =
            motivos[indice];

        mensagem.classList.remove(
            "mensagemAnimada"
        );

        void mensagem.offsetWidth;

        mensagem.classList.add(
            "mensagemAnimada"
        );

        indice++;

        setTimeout(
            mostrarMotivo,
            1500
        );
    }

    mostrarMotivo();

    criarCoracoes(15);
}


/* =========================
   JARDIM DE TULIPAS
========================= */

function jardimTulipas() {

    const jardim =
        document.getElementById("jardim");

    const flores =
        document.getElementById("flores");

    jardim.style.display = "block";

    flores.innerHTML = "";

    jardim.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        setTimeout(function () {

            const tulipa =
                document.createElement("div");

            tulipa.className =
                "tulipa";

            tulipa.innerHTML = `
                <div class="petalas">🌷</div>
                <div class="caule"></div>
            `;

            tulipa.style.left =
                (5 + Math.random() * 90) + "%";

            tulipa.style.animationDelay =
                (Math.random() * 0.5) + "s";

            flores.appendChild(
                tulipa
            );

        }, i * 180);
    }

    criarCoracoes(18);
}


/* =========================
   ABRAÇO
========================= */

function abraco() {

    const mensagem =
        document.getElementById("mensagem");

    clearTimeout(tempoMensagem);

    mensagem.innerHTML =
        "<div class='animacao-abraco'>🫂</div>" +
        "<strong>Considera esse um abraço meu.</strong><br><br>" +
        "Já que a distância não deixa eu te dar um de verdade agora... ❤️";

    mensagem.style.opacity = "1";

    animarMensagem();

    criarCoracoes(25);

    tempoMensagem =
        setTimeout(function () {

            mensagem.style.opacity = "0";

        }, 7000);
}


/* =========================
   CÉU ESTRELADO
========================= */

function ceuEstrelado() {

    const ceu =
        document.getElementById("ceu");

    const estrelas =
        document.getElementById("estrelas");

    ceu.style.display = "flex";

    estrelas.innerHTML = "";

    for (
        let i = 0;
        i < 55;
        i++
    ) {

        const estrela =
            document.createElement("span");

        estrela.className =
            "estrela";

        estrela.innerHTML =
            "✦";

        estrela.style.left =
            Math.random() * 100 + "%";

        estrela.style.top =
            Math.random() * 100 + "%";

        estrela.style.animationDelay =
            Math.random() * 3 + "s";

        estrelas.appendChild(
            estrela
        );
    }

    ceu.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================
   SEGREDO
========================= */

function segredo() {

    const caixa =
        document.getElementById("segredo");

    const texto =
        document.getElementById("segredoTexto");

    caixa.style.display = "block";

    texto.innerHTML =
        "🔐 Você encontrou um segredo...";

    caixa.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    setTimeout(function () {

        texto.innerHTML =
            "🔐 Você encontrou um segredo...<br><br>" +
            "Mas ainda não acabou.";

    }, 1800);

    setTimeout(function () {

        texto.innerHTML =
            "🔐 Você encontrou um segredo...<br><br>" +
            "Mas ainda não acabou.<br><br>" +
            "O verdadeiro segredo é que...";

    }, 3500);

    setTimeout(function () {

        texto.innerHTML =
            "❤️ Eu gosto muito de ter você na minha vida.";

        criarCoracoes(30);

    }, 5200);
}


/* =========================
   UMA COISA QUE NUNCA FALEI
========================= */

function nuncaFalei() {

    const mensagem =
        document.getElementById("mensagem");

    clearTimeout(tempoMensagem);

    mensagem.innerHTML = "";

    mensagem.style.opacity = "1";

    const frases = [

        "Uma coisa que eu nunca te falei...",

        "Eu comecei esse site pensando em fazer você sorrir.",

        "Mas enquanto eu fazia...",

        "eu percebi que estava sorrindo também.",

        "E acho que isso diz bastante coisa. ❤️"

    ];

    let indice = 0;

    function escreverFrase() {

        if (indice >= frases.length) {

            tempoMensagem =
                setTimeout(function () {

                    mensagem.style.opacity = "0";

                }, 3500);

            return;
        }

        mensagem.innerHTML =
            frases[indice];

        mensagem.classList.remove(
            "mensagemAnimada"
        );

        void mensagem.offsetWidth;

        mensagem.classList.add(
            "mensagemAnimada"
        );

        indice++;

        setTimeout(
            escreverFrase,
            2200
        );
    }

    escreverFrase();

    criarCoracoes(20);
}


/* =========================
   ENVELOPE
========================= */

function mostrarEnvelope() {

    const area =
        document.getElementById(
            "area-envelope"
        );

    area.style.display = "block";

    area.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    criarCoracoes(8);
}


function abrirCarta() {

    const envelope =
        document.querySelector(
            ".envelope"
        );

    const area =
        document.getElementById(
            "area-envelope"
        );

    const carta =
        document.getElementById(
            "carta"
        );

    if (
        envelope.classList.contains(
            "aberto"
        )
    ) {
        return;
    }

    envelope.classList.add(
        "aberto"
    );

    criarCoracoes(15);

    setTimeout(function () {

        area.style.display =
            "none";

        carta.style.display =
            "block";

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

    const elemento =
        document.getElementById(
            "surpresa"
        );

    const texto =
        document.getElementById(
            "surpresaTexto"
        );

    elemento.style.display =
        "block";

    texto.innerHTML = "";

    criarCoracoes(30);

    elemento.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    setTimeout(function () {

        texto.innerHTML =
            "😳 EU AVISEI PARA NÃO CLICAR! 😂❤️";

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

    for (
        let i = 0;
        i < quantidade;
        i++
    ) {

        const coracao =
            document.createElement(
                "div"
            );

        coracao.className =
            "coracao";

        coracao.innerText =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];

        coracao.style.left =
            Math.random() * 100 + "vw";

        coracao.style.fontSize =
            (
                18 +
                Math.random() * 25
            ) + "px";

        coracao.style.animationDuration =
            (
                3 +
                Math.random() * 4
            ) + "s";

        coracao.style.animationDelay =
            (
                Math.random() * 0.8
            ) + "s";

        document.body.appendChild(
            coracao
        );

        setTimeout(function () {

            coracao.remove();

        }, 8500);
    }
}


/* =========================
   MODO NOITE
========================= */

function modoNoite() {

    document.body.classList.toggle(
        "modo-noite"
    );

    const botao =
        document.querySelector(
            ".botao-noite"
        );

    if (
        document.body.classList.contains(
            "modo-noite"
        )
    ) {

        botao.innerText =
            "☀️";

    } else {

        botao.innerText =
            "🌙";
    }
}


/* =========================
   BOAS-VINDAS
========================= */

window.addEventListener(
    "load",
    function () {

        setTimeout(function () {

            const mensagem =
                document.createElement(
                    "div"
                );

            mensagem.className =
                "mensagem-boas-vindas";

            mensagem.innerHTML =
                "Antes de clicar em qualquer coisa...<br>" +
                "só queria que você soubesse que eu fiz isso pensando em você. ❤️";

            document.body.appendChild(
                mensagem
            );

            setTimeout(function () {

                mensagem.remove();

            }, 5200);

        }, 900);
    }
);


/* =========================
   MÚSICA
========================= */

function controlarMusica() {

    const musica =
        document.getElementById("musica");

    const botao =
        document.getElementById("botaoMusica");

    if (!musica || !botao) {
        return;
    }

    if (musica.paused) {

        const tentativa =
            musica.play();

        if (tentativa !== undefined) {

            tentativa
                .then(function () {

                    botao.innerText =
                        "⏸️ Pausar música";

                    botao.classList.add(
                        "tocando"
                    );

                })
                .catch(function () {

                    botao.innerText =
                        "🎵 Toque novamente";

                    botao.classList.remove(
                        "tocando"
                    );

                });

        }

    } else {

        musica.pause();

        botao.innerText =
            "🎵 Uma música para você";

        botao.classList.remove(
            "tocando"
        );
    }
}


/* =========================
   QUANDO A MÚSICA TERMINAR
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const musica =
            document.getElementById("musica");

        const botao =
            document.getElementById("botaoMusica");

        if (!musica || !botao) {
            return;
        }

        musica.addEventListener(
            "ended",
            function () {

                botao.innerText =
                    "🎵 Uma música para você";

                botao.classList.remove(
                    "tocando"
                );

            }
        );

    }
);
