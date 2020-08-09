var song, startTime, file;
var keyZoneIcons, keys = {}, keysToShow = [];
var keysarr = [];
var leftPointer = 0;
var keyIndex = 0;
var playing = false;
var songName = location.hash.substr(1);
console.log(songName);

//Eight zones for the eight touch typing zones
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

//Load the audio and level text file
function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound(`/audio/${songName}.mp3`);
	file = loadStrings(`/levels/${songName}.txt`);
}

//Setup the canvas, load in the background image, and generate keys
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

		if (songName == 'ThriftShop') parts[1] = parseFloat(parts[1]) - 30000;

    keys[round(parseFloat(parts[1]))] = new Key(parts[0], zoneNumber, round(parseFloat(parts[1])));
		keysarr.push(new Key(parts[0], zoneNumber, round(parseFloat(parts[1]))))
	}
  //Store time when game play begins
  startTime = millis();
}

function draw(){
  background(bg2);

  //PLay audio
  if (!playing){
    song.play();
		song.onended(function(){
			localStorage.setItem(songName, "" + Math.round(100*0.5*score/keysarr.length));
			window.location.href = "/finish.html";
		});
    playing = true;
  }
  
  //Score and misses text on top of screen
  fill("white");
  textSize(50);
  textFont("Courier Prime");
  text(`Score: ${score}`, textWidth(`Score: ${score}`)/2 + 10, 50);
  text(`Misses: ${misses}`, textWidth(`Misses: ${misses}`)/2 + 10, 110);
  
  //Draw bottom bar
  rectMode(CENTER);
  fill("purple");
  rect(width/2, height-100, width*0.55, 60, 10);
  
  //Draw top eight boxes where other keys come out
  for (let i=0; i<keyZoneIcons.length; i++){
    keyZoneIcons[i].show();
  }
  
  //Display feedback text
  for (let i=0; i<feedbackTextArray.length;i++){
    if (feedbackTextArray[i].y > height/2){
      feedbackTextArray[i].move();
      feedbackTextArray[i].show();
    }
  }

  //Find number of milliseconds since the game has started
  let currentTime = millis()-startTime;

  //Get all notes within three seconds of the current time
	keysToShow = getNotes(currentTime, 3000);
	

  //Display notes and check for collisions
  for (let i=0; i<keysToShow.length; i++){ 
    if (keysToShow[i].y < height && !(keysToShow[i].done)){
      keysToShow[i].show();
      keysToShow[i].move(currentTime, 100, height-100, 3000);
      keysToShow[i].checkCollisions();
    }
  }
  
}

//Find keys that are within three seconds of current time
function getNotes(currentTime, delay){
	let ret = [];

	while (keysarr[leftPointer].time < currentTime - 1000) leftPointer++;
	let x = leftPointer;
	while (x < keysarr.length && keysarr[x].time < currentTime + delay){
		ret.push(keysarr[x]);
		x++;
	}
	return ret;
}