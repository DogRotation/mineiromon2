var personagem;
var wallGroup,mobGroup;
var end1,end2;
var persParadoR,persParadoL,persCaindo;
var persAndandoR,persAndandoL;
var pilhadedinheiro,moeda;
var monstro;
var socoR,socoL;
var coração;
var position = "left";
var life = 200;


function preload(){
  persParadoR = loadAnimation("./imagens/persParadoR.png");
  persParadoL = loadAnimation("./imagens/persParadoL.png");
  persCaindo =  loadAnimation("./imagens/persCaindo.png");
  persAndandoR = loadAnimation("./imagens/persAndandoR.png","./imagens/persAndandoR-1.png");
  persAndandoL = loadAnimation("./imagens/persAndandoL.png","./imagens/persAndandoL-1.png");
  socoR = loadAnimation("./imagens/socoR.png");
  socoL = loadAnimation("./imagens/socoL.png");
  pilhadedinheiro = loadAnimation("./imagens/pilhaDeDinheiro.png");
  moeda = loadAnimation("./imagens/moeda.png");
  coração = loadAnimation("./imagens/coração.png");
  monstro = loadAnimation("./imagens/monstro.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
personagem = createSprite(windowWidth/2, 850, 20, 20);
personagem.addAnimation("paradoR",persParadoR);
personagem.addAnimation("paradoL",persParadoL);
personagem.addAnimation("caindo",persCaindo);
personagem.addAnimation("andandoR",persAndandoR);
personagem.addAnimation("andandoL",persAndandoL);
personagem.shapeColor = "red";
end1 = createSprite(windowWidth/2+300, 10, 100, 20);
end1.shapeColor = "blue";
end2 = createSprite(windowWidth/2-565, 350, 20, 100);
end2.shapeColor = "yellow";

wallGroup = new Group();
mobGroup = new Group();
createMap();  
createMob();


//personagem.debug = true;
personagem.setCollider("rectangle", 10,30, 30,70);
}

function draw() {
background("gray");

move(10);
tp();
lifeBar();

mobGroup.bounceOff(wallGroup);
//4
console.log(personagem.x,personagem.y)
drawSprites();
personagem.collide(wallGroup);

  if(personagem.isTouching(mobGroup) && life >= 50){
    life -= 50;
  }
}
