var song, startTime, file;
var keyZoneIcons, keys = {}, keysToShow = [];
var keyIndex = 0;
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
	file = loadStrings(`/levels/${songName}.txt`);
}

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  bg2 = loadImage("/images/bg2.png")

  //Create the key zone icons
  keyZoneIcons = [];
  for (let i=0; i<8; i++){
    keyZoneIcons.push(new Key("", i));
  }

  //Generate keys
  for (let line of file){
		let parts = line.split(' ');
    let zoneNumber;

    //Gets the zone number
    for (var i=0; i<zones.length; i++){
      for (let j=0; j<zones[i].length; j++){
        if (parts[0] == zones[i][j]){
          zoneNumber = i;
        }
      }
    }

    keys[round(parseFloat(parts[1]))] = new Key(parts[0], zoneNumber, round(parseFloat(parts[1])));
	}
  startTime = millis();
}

function draw(){
  background(bg2);
  if (!playing){
    song.play();
    playing = true;
  }  
  
  //Draw bottom bar
  rectMode(CENTER);
  fill("purple");
  rect(width/2, height-100, width*0.55, 60, 10);
  
  for (let i=0; i<keyZoneIcons.length; i++){
    keyZoneIcons[i].show();
  }

  let delay = 3000;
  let currentTime = millis()-startTime;
  let currentKeyTime = parseInt(Object.keys(keys)[keyIndex]);
  currentKeyTime = currentKeyTime - delay;
  
  
  if (currentKeyTime >= currentTime-10 && currentKeyTime <= currentTime+10 || currentKeyTime == currentTime) {
    keysToShow.push(keys[currentKeyTime+delay]); 
    keyIndex++;
  }

  for (let i=0; i<keysToShow.length; i++){ 
    if (keysToShow[i].y < height-10 && !(keysToShow[i].done)){
      keysToShow[i].show();
      keysToShow[i].move();
      //keysToShow[i].move(startTime, currentTime, 100, height-100);
      keysToShow[i].checkCollisions();
    }
  }
  
}

window.addEventListener('keydown', (e) => { keys[e.key] = true; });
window.addEventListener('keyup', (e) => { delete keys[e.key]; });