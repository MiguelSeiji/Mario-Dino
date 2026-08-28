//Seleção de Elemento do html
const audioStart = new Audio('.som/audio_theme.mp3')
const audioGameOver = new Audio('/som/audio_gameover.mp3')
const mario =document.queryselector('.mario');
const pipe =document.queryselector('.pipe');
const startButton =document.queryselector('.startButton');
const restartButton =document.queryselector('.restartButton');
const gameOver =document.queryselector('.gameOver');

//Variaveis de Controle do jogo
let = gameInterval = null;

//Funcoes para Iniciar o jogo
const startGame = () => {
pipe.classlits.add('pipe-animation');
//oculta o botão de "iniciar" para evitar cliques acidentais
startButton.style.display='none';
//oculta a tela de gameOver(do jogo anterior)
gameOver.style.display='none';
//incia a reprodução da música tema
audioStart.currentTime=0;
//inicia a reprodução da música tema.
audioStart.play();

//verifica se o intervalo do jogo já não está rodando.
if(!gameInterval){
    //cria um intervalo que executa a função gameloop a cada 10 milesegundos.
    // isso atualiza a detecção de colisão continuamente.
    gameInterval=setInterval(gameLoop, 10);
   }
};

//função para reiniciar o jogo
const restartGame = () => {
    pipe.classList.add('pipe-animation');
    pipe.style.left='';
    pipe.style.right=0;
    mario.src='./img/mario.gif';
    mario.style.Width='150px'
    mario.style.botton='0';
}