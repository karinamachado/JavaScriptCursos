
let canvas = document.getElementById('snake');
// context renderiza
let context = canvas.getContext('2d');
const box = 32;

//funcao cria o canva

function criarBg() {
       // cria o estilo do contexto
    context.fillStyle = 'lightgreen';
      //desenha o retangulo, trabalha com 4 parametros: x, y w, h, onde acontece o jogo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBg();

