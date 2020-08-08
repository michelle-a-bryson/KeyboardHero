var introWindow;
let playButton;
let bg;
let textImg;
function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  bg = loadImage("/images/bg.png")
  textImg = loadImage("/images/TextImg/3.png")
  introWindow = createGraphics(width*.75, height*.75);
}

function draw(){
  background(bg);
  drawIntro();
}

function drawIntro(){
  introWindow.noStroke();
  introWindow.fill("black");
  introWindow.rect(0,0, introWindow.width, introWindow.height, 15);
  
  introWindow.fill("white");
  introWindow.textFont("Courier Prime");
  introWindow.textSize(70);
  introWindow.image(textImg,introWindow.width/20, introWindow.height/10, 500, 100);
  //introWindow.textAlign(CENTER, TOP);
  //introWindow.text("Keyboard Hero", introWindow.width/2, introWindow.height/10);

  introWindow.textAlign(CENTER, TOP);
  introWindow.textSize(30);
  introWindow.text("\nWelcome hero! You have come at a great time! \nDefeat the Note Queen and save all music and technology!\n (Please come up with something better - My brain sob)", introWindow.width/2, introWindow.height/4)
  
  playButton = createButton("PLAY");
  playButton.position(width/2 - textWidth("PLAY")*2, height/2+120);
  playButton.style("background-color", "purple");
  playButton.style("border","0px");
  playButton.style("border-radius", "10px");
  playButton.style("font-family", "Courier Prime");
  playButton.style("color", "white");
  playButton.style("font-size", "45px");
  playButton.style("padding", "10px");
	playButton.mousePressed(function(){window.location.href='/game.html'});
  


  image(introWindow, (width-introWindow.width)/2, height/7, introWindow.width, introWindow.height);
}
