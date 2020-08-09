
var introWindow;
let playButton;
let restartButton;

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  introWindow = createGraphics(width*.75, height*.75);
}

function draw(){
  background(bgwin);
  drawIntro();
}

function drawIntro(){
  introWindow.noStroke();
  introWindow.fill("black");
  introWindow.rect(0,0, introWindow.width, introWindow.height, 15);
  
  introWindow.fill("white");
  introWindow.textFont("'Tomorrow', sans-serif");
  introWindow.textSize(70);
  introWindow.image(textImg, introWindow.width/4 + 110, introWindow.height/10 - 25, 500, 100);
  //introWindow.textAlign(CENTER, TOP);
  //introWindow.text("Keyboard Hero", introWindow.width/2, introWindow.height/10);

  introWindow.textAlign(CENTER, TOP);
  introWindow.textSize(25);
  introWindow.text("\nYou finished the level! \n\n Congratulations hero! You are now\n one step closer to becoming a better typer!\n\n Click restart to continue your training!", introWindow.width/2, introWindow.height/4)

  restartButton = createButton("Restart")
  restartButton.position(width/2 - textWidth("PLAY")*2, height/2 + 150);
  //startButton.position(0,0);
  restartButton.size(150, 70)
  restartButton.style("background", "linear-gradient(to right, #cb11cb 0%, #2575fc 100%)");
  restartButton.style("border","0px");
  restartButton.style("border-radius", "10px");
  restartButton.style("font-family", "Courier Prime");
  restartButton.style("color", "white");
  restartButton.style("font-size", "25px");
  restartButton.style("padding", "0px");
  restartButton.mousePressed(function(){window.location.href='/index.html'});

  image(introWindow, (width-introWindow.width)/2, height/7, introWindow.width, introWindow.height);
}
