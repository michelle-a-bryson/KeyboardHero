var bg, bg2, textImg, bg3;

function preload(){
  bg = loadImage("/images/bg.png")
  bg2 = loadImage("/images/bg2.png")
  textImg = loadImage("/images/TextImg/3.png")
  bg3 = loadImage("/images/bg3.png")
}

class Key{
	constructor(letter, zone, time){
    this.text = letter;
    this.zone = zone;
		this.time = time;
    this.x = width/2 - 400 + 100*zone;
		this.done = false;
		this.points = 0;
    if (letter == ""){
      this.y = 100;
    }
    else {
      this.y = 100;
    }
    this.size = 55;
  }

  show(){
    rectMode(CORNER);
    //Shadow
    noStroke();
    fill("grey")
    rect(this.x, this.y, this.size+5, this.size+5, 10);
    
    //Top of the key
    fill("lightgrey")
    rect(this.x + 2.5, this.y + 2.5, this.size, this.size, 10);
    
    //Text
    fill("black")
    textFont("Courier Prime")
    textSize(40)
    textAlign(CENTER);
    text(this.text, this.x + this.size - textWidth(this.text), this.y+ 3/4 * this.size);
  }

  // move(startTime, currentTime, topHi, bottomHi){
	// 	this.y = map(currentTime, startTime, startTime+3000, topHi, bottomHi);
  // }

  move(){
    this.y+=5;
  }

	test(keys){
		if (this.text in keys && this.checkCollisions()){
			this.done = true;
			this.points = 1;
		}		
	}

  checkCollisions(){
    if (keyIsPressed){
      if (collideRectRect(width/2, height-100, width*0.55, 60, this.x, this.y, this.size, this.size) && key == this.text){
        console.log("YAY");
        this.done = true;
      }
    }
    
  }
}
