
let canvas = document.getElementById('snake');
// context renders
let context = canvas.getContext('2d');
const box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    // Math.floor => returns the smallest integer from the number.
    // Math.random => returns random number up to 1.
    x: Math.floor(Math.random() * 15 + 1)  * box,
    y: Math.floor(Math.random() * 15 + 1 ) * box
}

//function create canva 

function criarBg() {
       // create style context
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

function drawfood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);

}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode === 37 && event.keyCode !== 'right') direction = 'left';
    if(event.keyCode === 38 && event.keyCode !== 'down') direction = 'up';
    if(event.keyCode === 39 && event.keyCode !== 'left') direction = 'right';
    if(event.keyCode === 40 && event.keyCode !== 'up') direction = 'down';
}

function iniciarJogo(){
    //if the snake value is greater than 15 and the direction is on the right, it starts at position 0 of X.
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBg();
    criarCobrinha();
    drawfood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // create snake coordinates

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

// Passing the 100 millisecond interval to start. That way the game won't crash.

let jogo = setInterval(iniciarJogo, 100);












