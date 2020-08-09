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
    //keys.push(new Key(parts[0], zones[parts[0]], parseFloat(parts[1])))
	}
  startTime = new Date();
}

// gets the notes for the next 10 seconds
function getCurrentNotes(){
	

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


  let currentTime = new Date()-startTime;
  console.log(currentTime);
  if (keys[currentTime] != undefined){
    keysToShow.push()
    keys[currentTime].show();
    keys[currentTime].move();     
  }
}

window.addEventListener('keydown', (e) => { keys[e.key] = true; });
window.addEventListener('keyup', (e) => { delete keys[e.key]; });

function keyPressed(){
  console.log(key);
  /*
  for (let i=0; i<allKeys.length; i++){
    if (allKeys[i].y > 0 && allKeys[i].y < windowHeight){
       if (allKeys[i].checkCollisions() && allKeys[i].text == key){        
        console.log("win!");
      }
    }
  }
  */
}