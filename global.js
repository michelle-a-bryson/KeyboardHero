var bg, bg2, textImg, bg3, score = 0, misses = 0, feedbackTextArray = [];

function preload(){
  bg = loadImage("/images/bg.png")
  bg2 = loadImage("/images/bg2.png")
  textImg = loadImage("/images/TextImg/3.png")
  bg3 = loadImage("/images/bg3.png")
  bgwin = loadImage("/images/bgwin.jpg")
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

  move(currentTime, topHi, bottomHi, delay){
		let arr = [this.time, currentTime+delay, currentTime, topHi, bottomHi];
		this.y = map(...arr);
  }

	test(keys){
		if (this.text in keys && this.checkCollisions()){
			this.done = true;
			this.points = 1;
		}		
	}

  checkCollisions(){
    if (keyIsPressed){
      if (collideRectRect(0, height-100, width, 60, this.x, this.y, this.size, this.size) && key == this.text){
        if (this.y <= height-30 && this.y >= height-130){
          score+=2;
          feedbackTextArray.push(new FeedbackText("Perfect! +2"));
        }
        else{
          score++;
          feedbackTextArray.push(new FeedbackText("Great! +1"));
        }
        this.done = true;
      }
    }

    if (this.y > height){
      feedbackTextArray.push(new FeedbackText("Miss!"));
      misses++;
    }
    
  }
}

class FeedbackText {
  constructor(text){
    this.x = width/8;
    this.y = height;
    this.text = text;
  }

  move(){
    this.y-=2;
  }

  show(){
    fill("white");
    textSize(40);
    textFont("Courier Prime");
    text(`${this.text}`, this.x, this.y);
  }
}