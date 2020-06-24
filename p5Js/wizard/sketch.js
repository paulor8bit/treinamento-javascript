let imagemCenario
// let imagemCenarioUm
// let imagemCenarioDois
let imagemPersonagem
let imagemInimigo
let cenario
// let cenarioUm
// let cenarioDois
let somDoPulo
let somDoJogo
let personagem
let inimigo

const matrizPersonagem =  [
[0,0], [220,0], [440,0], [660,0],
[0,270], [220,270], [440,270], [660,270],
[0,540], [220,540], [440,540], [660,540],
[0,810], [220,810], [440,810], [660,810]]
const matrizInimigo =[
[0,0],[104,0],[208,0],[312,0],
[0,104],[104,104],[208,104],[312,104],
[0,208],[104,208],[208,208],[312,208],
[0,312],[104,312],[208,312],[312,312],
// [0,418],[104,418],[208,418],[312,418],
// [0,522],[104,522],[208,522],[312,522],
// [0,626],[104,626],[208,626],[312,626]
]

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  // imagemCenarioUm = loadImage('imagens/cenario/floresta1.png')
  // imagemCenarioDois = loadImage('imagens/cenario/floresta2.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png')
  somDoJogo = loadSound('sons/atack.mp3')
  somDoPulo = loadSound('sons/somPulo.mp3')
  // somGameOver = loadSound('sons/game-over-sound-effect.mp3');
  
}
function setup() {
  somDoJogo.loop()
  createCanvas(windowWidth, windowHeight);
  
  cenario = new Cenario(imagemCenario, 3)
  // cenarioUm = new Cenario(imagemCenarioUm, 1)
  // cenarioDois = new Cenario(imagemCenarioDois, 3)
  
  personagem = new Personagem(matrizPersonagem, imagemPersonagem,
  0, 110, 135, 220, 270)
 
  inimigo = new Inimigo(matrizInimigo, imagemInimigo,
  width-52, 52, 52, 104, 104)

  frameRate(30)
  
  
}

function keyPressed() {
  // if (key === 'ArrowUp') {
  //   personagem.pula()
  //   somDoPulo.play()
  // }

  if(keyIsDown(UP_ARROW) || keyIsDown(87))
  {
    personagem.pula()
    somDoPulo.play()
  }
}

function draw() {
  cenario.exibe()
  cenario.move()
  // cenarioUm.exibe()
  // cenarioDois.exibe()
  // cenarioUm.move()
  // cenarioDois.move()
  inimigo.exibe()
  personagem.aplicaGravidade()
  inimigo.move()
  personagem.exibe()  
  
  if(personagem.estaColidindo(inimigo) ) {
    console.log('colidiu')
    // somDoJogo.stop()
    noLoop()
    // somGameOver.play()
    image(imagemGameOver, ( width / 2 ) - 206, ( height / 2 ) - 39, 412, 78);
  }
}