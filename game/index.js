let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let gull = new Image();
let sea = new Image();
let sharks = new Image();
let flying = new Image();

sea.src = "img/sea.webp";
gull.src = "img/gull.png"
sharks.src = "img/sharks.png";
flying.src = "img/flying.png";

//Звуковые файлы 
let muzyka = new Audio();

muzyka.src = "audio/score.mp3"


let gap = 400;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp(){
  yPos -=25;
  muzyka.play();
}

//Создание блоков
let pipe=[];

pipe[0]={
  x:cvs.width=500,
  y:50
}

// Позиция бабки-яги
let xPos = 10;
let yPos = 150;
let grav = 1.5;

function draw () {

  ctx.drawImage(sea,0,0);

  for (let i = 0; i < pipe.length; i++){
    ctx.drawImage(gull,pipe[i].x, pipe[i].y,150,150);
    ctx.drawImage(sharks,pipe[i].x,gap,150,150);
  
    pipe[i].x--;

    if (pipe[i].x == 125){
      pipe.push({
        x:cvs.width,
        y:Math.floor(Math.random()*gap-50)
      })
    }

    // if(xPos + flying.width >= pipe[i].x
    //   && xPos <= pipe[i].x + gull.width
    //   && (yPos <= pipe[i].y + gull.height
    //     || yPos + flying.height >= pipe[i].y)) {
    //       console.log(8);;
    //     }
      
  }

  ctx.drawImage(flying,xPos,yPos,150,150);

  yPos += grav;
  requestAnimationFrame(draw);

}

sharks.onload = draw;