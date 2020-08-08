var song;
var keys = [];
var playing = false;
var songName = location.hash.substr(1);
console.log(songName);

var zones = [
            ["q", "a", "z"],
            ["w", "s", "x",],
            ["e", "d", "c",],
            ["r", "f", "v", "t", "g", "b"],
            ["y", "h", "n", "u", "j", "m"], 
            ["i", "k", ","],
            ["o", "l", "."],
            ["p", ";", "/"]
            ];


function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound(`/audio/${songName}.mp3`);
	var file = loadStrings(`/levels/${songName}.txt`);
	for (let line of file){
		let parts = line.split(' ');
		keys.push(new Key2(parts[0], zones[parts[0]], parseFloat(parts[1])))
	}
}


var keyZoneIcons;
var allKeys = [];


//var keys = {};

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  bg2 = loadImage("/images/bg2.png")

  keyZoneIcons = [];
  allKeys = [];

  //Create the key zone icons
  for (let i=0; i<8; i++){
   keyZoneIcons.push(new Key("", i));
  }

  //Generate keys
  // for (let i=0; i<100; i++){
  //   let randomZone = round(random(7));
  //   let randomKeyIndex;
  //   if(randomZone == 3 || randomZone == 4){
  //     randomKeyIndex = round(random(5));
  //   }
  //   else{
  //     randomKeyIndex = round(random(2));
  //   }
  //   allKeys.push(new Key(zones[randomZone][randomKeyIndex], randomZone));
  // }
}

function draw(){
  if (!playing){
    song.play();
    playing = true;
  }

  frameRate(56);
  
  background(bg2);
  
  rectMode(CENTER);
  fill("purple");
  rect(width/2, height-100, width*0.55, 60, 10);
  

  for (let i=0; i<keyZoneIcons.length; i++){
    keyZoneIcons[i].show()
  }

  // for (let i=0; i<allKeys.length; i++){
  //   allKeys[i].move();
  //   if (allKeys[i].y >= 100){
  //     allKeys[i].show();
	// 		allKeys[i].test(keys);
  //   }
  // }
}

window.addEventListener('keydown', (e) => { keys[e.key] = true; });
window.addEventListener('keyup', (e) => { delete keys[e.key]; });


function keyPressed(){
  console.log(key);
  for (let i=0; i<allKeys.length; i++){
    if (allKeys[i].y > 0 && allKeys[i].y < windowHeight){
       if (allKeys[i].checkCollisions() && allKeys[i].text == key){        
        console.log("win!");
      }
    }
  }
}