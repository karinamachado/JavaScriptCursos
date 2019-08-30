
let canvas = document.getElementById('snake');
// context renderiza
let context = canvas.getContext('2d');
const box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

//funcao cria o canva

function criarBg() {
       // cria o estilo do contexto
    context.fillStyle = 'lightgreen';
      //desenha o retangulo 2d, trabalha com 4 parametros: x, y w, h, onde acontece o jogo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){

    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }
}

function iniciarJogo(){
    criarBg();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //criar coordenadas da cobrinha

    if( direction == "right")  snakeX += box;
    if( direction == "left" )  snakeX -= box;
    if( direction == "up"   )  snakeY -= box;
    if( direction == "down" )  snakeY += box;

    snake.pop();

    let newHead = {
        x:snakeX,
        y:snakeY
    }
    snake.unshift(newHead);
}

// Passando o intervalo de 100 milisegundos para iniciar. Assim o jogo nao vai travar.

let jogo = setInterval(iniciarJogo, 100);








