document.body.style.backgroundImage = "url(./images/bg2.png)";
var levelIcons = document.getElementById("level-icons");

levels = {
	"Firework, Katy Perry": {
		difficulty: '⭐',
		highscore: localStorage.getItem("Firework") || "--" + "%"
	},
	"Rare, Selena Gomez": {
		difficulty: '⭐',
		highscore: localStorage.getItem("Rare") || "--" + "%"
	},
	"Bad Guy, Billie Eilish": {
		difficulty: '⭐⭐',
		highscore: localStorage.getItem("Bad Guy") || "--" + "%"
	},
	"That's What I Like, Bruno Mars": {
		difficulty: '⭐⭐',
		highscore: localStorage.getItem("That's What I Like") || "--" + "%"
	},
	"Thrift Shop, Macklemore": {
		difficulty: '⭐⭐⭐',
		highscore: localStorage.getItem("That's What I Like") || "--" + "%"
	}
}


for (let l of Object.entries(levels)){
	levelIcons.innerHTML += `<a class="stage" href="/game.html#${l[0].split(',')[0]}">
		<p>${l[0]}</p>
		<p>${l[1].highscore}</p>
		<p>${l[1].difficulty}</p>
	</div>`;
}

//Me trying to figure out how to use if + else with dictionaries in js 😰
if(levels["Firework, Katy Perry"]){
   //The dict 10 exist
   console.log(levels["Firework, Katy Perry"]);
}