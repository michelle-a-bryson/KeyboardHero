
var introWindow;
let playButton;
let startButton;

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  introWindow = createGraphics(width*.75, height*.75);
}

function draw(){
  background(bg2);
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
  introWindow.text("\nWelcome hero! You have come at a great time! \nThe evil Note Queen has scrambled some of the best \nmusic pieces in the world! Help us rearrange the songs\n  by hitting the correct key when the right beat comes!", introWindow.width/2, introWindow.height/4)

  startButton = createButton("Start")
  startButton.position(width/2 - textWidth("PLAY")*3, height/2 + 120);
  //startButton.position(0,0);
  startButton.size(200, 100)
  startButton.style("background", "linear-gradient(to right, #cb11cb 0%, #2575fc 100%)");
  startButton.style("border","0px");
  startButton.style("border-radius", "10px");
  startButton.style("font-family", "Courier Prime");
  startButton.style("color", "white");
  startButton.style("font-size", "45px");
  startButton.style("padding", "0px");
  startButton.mousePressed(function(){window.location.href='/levels.html'});

  
  // playButton = createButton("PLAY");
  // playButton.position(width/2 - textWidth("PLAY")*2, height/10+120);
  // playButton.style("background-color", "purple");
  // playButton.style("border","0px");
  // playButton.style("border-radius", "10px");
  // playButton.style("font-family", "Courier Prime");
  // playButton.style("color", "white");
  // playButton.style("font-size", "45px");
  // playButton.style("padding", "0px");
	// playButton.mousePressed(function(){window.location.href='/levels.html'});

  image(introWindow, (width-introWindow.width)/2, height/7, introWindow.width, introWindow.height);
}
