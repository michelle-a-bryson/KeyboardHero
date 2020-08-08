
class Key {
  constructor(letter, zone){
    this.zone = zone;
    this.x = zone * 80 + width/3;
    this.y = 100;
    this.size = 55;
    this.text = letter;
  }

  show(){
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

  move(){
    this.y++;
  }
}