const canvas = document.getElementById("binaryCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binarios = "01";
const tamanhoFonte = 20;
const colunas = Math.floor(canvas.width / tamanhoFonte);
const gotas = new Array(colunas).fill(0);

function desenharCodigoBinario() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Efeito de rastro
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; // Cor do texto binário (verde)
    ctx.font = `${tamanhoFonte}px monospace`;

    for (let i = 0; i < gotas.length; i++) {
        const texto = binarios[Math.floor(Math.random() * binarios.length)];
        ctx.fillText(texto, i * tamanhoFonte, gotas[i] * tamanhoFonte);

        if (gotas[i] * tamanhoFonte > canvas.height && Math.random() > 0.975) {
            gotas[i] = 0;
        }
        gotas[i]++;
    }

    // **Diminui a velocidade aumentando o tempo entre os frames**
    setTimeout(() => {
        requestAnimationFrame(desenharCodigoBinario);
    }, 50); // 100ms de atraso (aumente esse valor para ficar ainda mais lento)
}

// Iniciar animação
desenharCodigoBinario();

// Ajustar ao redimensionar a tela
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gotas.length = Math.floor(canvas.width / tamanhoFonte);
    gotas.fill(0);
});
