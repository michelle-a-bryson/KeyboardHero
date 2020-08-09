
var introWindow;
let playButton;
let startButton;

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  introWindow = createGraphics(width*.75, height*.75);
}

function draw(){
  background(bg3);
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
  introWindow.text("\nWelcome to Keyboard Hero!\n\nAre you ready to harness the power of music and enhance your typing skills? Inspired by the classic game ‘Guitar Hero,’ Keyboard Hero gives you all the fun of a classic video game with a typing game twist! Say goodbye to all those boring typing games and get ready to increase your words per minute while having A Major adventure! ", introWindow.width/8, introWindow.height/4, 3/4 * introWindow.width, 500)

  startButton = createButton("Start")
  startButton.position(width/2 - textWidth("PLAY")*2, height/2 + 170);
  startButton.size(100, 50)
  startButton.style("background", "linear-gradient(to right, #cb11cb 0%, #2575fc 100%)");
  startButton.style("border","0px");
  startButton.style("border-radius", "10px");
  startButton.style("font-family", "Courier Prime");
  startButton.style("color", "white");
  startButton.style("font-size", "25px");
  startButton.style("padding", "0px");
  startButton.mousePressed(function(){window.location.href='/levels.html'});


  image(introWindow, (width-introWindow.width)/2, height/7, introWindow.width, introWindow.height);
}
