zone1 = ["a", "s", "d", "f", "g"]
zone2 = ["h", "j", "k", "l", ";"]
zone3 = ["q", "w", "e", "r", "t"]
zone4 = ["y", "u", "i", "o", "p"]
zone5 = ["z", "x", "c", "v"]
zone6 = ["b", "n", "m", ",", "."]

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  bg2 = loadImage("/images/bg2.png")
}

function draw(){
  background(bg2);

  //Create the key zones
  for (let i=0; i<7; i++){
    key = new Key(" ", i);
    key.show();
    key.move();
  }


  //key = new Key("a");
  //key.show();
}