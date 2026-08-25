```css
* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    text-align: center;
    color: white;
    overflow-x: hidden;

    background:
        radial-gradient(circle at 20% 20%, rgba(255, 180, 220, 0.35), transparent 25%),
        radial-gradient(circle at 80% 70%, rgba(180, 130, 255, 0.25), transparent 30%),
        linear-gradient(160deg, #170b2d, #401343, #7b2057, #b83d73);

    background-attachment: fixed;
}

/* LUZES DO FUNDO */

body::before {
    content: "";
    position: fixed;
    width: 450px;
    height: 450px;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: rgba(255, 130, 200, 0.18);
    filter: blur(90px);
    pointer-events: none;
}

/* ESTRELAS */

body::after {
    content: "✦     ✧       ⋆       ✦      ·      ✧       ⋆       ✦";
    position: fixed;
    inset: 0;
    padding: 20px;
    font-size: 20px;
    line-height: 90px;
    letter-spacing: 15px;
    opacity: 0.25;
    pointer-events: none;
    animation: estrelas 6s ease-in-out infinite alternate;
}

@keyframes estrelas {
    from {
        opacity: 0.15;
        transform: translateY(0);
    }

    to {
        opacity: 0.35;
        transform: translateY(-15px);
    }
}

/* CONTEÚDO */

.container {
    position: relative;
    z-index: 2;
    max-width: 850px;
    margin: auto;
    padding: 70px 20px 60px;
}

/* TÍTULO */

h1 {
    font-size: 55px;
    margin: 0 0 12px;

    text-shadow:
        0 0 10px rgba(255, 150, 210, 0.8),
        0 0 30px rgba(255, 100, 180, 0.5);

    animation: entrada 1s ease;
}

.subtitulo {
    font-size: 20px;
    margin-bottom: 40px;
    color: #ffeaf6;
    animation: entrada 1.3s ease;
}

/* BOTÕES */

.botoes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    max-width: 720px;
    margin: auto;
}

button {
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 22px;
    padding: 19px 15px;

    font-size: 17px;
    cursor: pointer;
    color: white;

    background: rgba(255, 255, 255, 0.13);

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.25),
        inset 0 1px rgba(255, 255, 255, 0.15);

    transition: 0.25s;
}

button:hover {
    transform: translateY(-5px) scale(1.03);
    background: rgba(255, 255, 255, 0.22);
}

button:active {
    transform: scale(0.95);
}

/* MENSAGEM */

.mensagem {
    margin: 30px auto;
    max-width: 680px;
    min-height: 90px;
    padding: 27px;

    border-radius: 25px;

    font-size: 19px;
    line-height: 1.7;

    color: white;

    background: rgba(255, 255, 255, 0.13);

    border: 1px solid rgba(255, 255, 255, 0.22);

    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);

    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.25);

    transition: 0.3s;
}

/* ANIMAÇÃO DA MENSAGEM */

.mensagemAnimada {
    animation: mensagemEntrando 0.5s ease;
}

@keyframes mensagemEntrando {
    from {
        opacity: 0;
        transform: translateY(15px) scale(0.97);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* CARTA */

.carta {
    display: none;

    max-width: 700px;
    margin: 30px auto;
    padding: 35px;

    text-align: left;
    line-height: 1.8;

    color: #5a2638;

    background: linear-gradient(
        135deg,
        #fff9fc,
        #ffe8f3
    );

    border-radius: 28px;

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.35);

    animation: aparecer 0.8s ease;
}

.carta h2 {
    text-align: center;
    color: #9b315e;
}

/* SURPRESA */

.surpresa {
    display: none;

    margin: 30px auto;
    padding: 35px;

    border-radius: 28px;

    font-size: 22px;

    background: rgba(255, 255, 255, 0.15);

    border: 1px solid rgba(255, 255, 255, 0.25);

    backdrop-filter: blur(15px);

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.3);

    animation: aparecer 0.8s ease;
}

/* CORAÇÕES */

.coracao {
    position: fixed;
    bottom: -30px;

    font-size: 25px;

    animation: subir 5s linear forwards;

    pointer-events: none;

    z-index: 20;
}

@keyframes subir {
    from {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    to {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }
}

/* ANIMAÇÕES */

@keyframes aparecer {
    from {
        opacity: 0;
        transform: scale(0.85);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes entrada {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* CELULAR */

@media (max-width: 600px) {

    .container {
        padding: 55px 15px 40px;
    }

    h1 {
        font-size: 40px;
    }

    .subtitulo {
        font-size: 17px;
    }

    .botoes {
        grid-template-columns: 1fr;
        gap: 13px;
    }

    button {
        width: 100%;
        font-size: 16px;
        padding: 18px;
    }

    .mensagem {
        font-size: 17px;
        padding: 22px;
    }

    .carta {
        padding: 25px;
        font-size: 16px;
    }

    .surpresa {
        font-size: 19px;
    }
}
```
