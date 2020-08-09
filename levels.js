document.body.style.backgroundImage = "url(./images/bg2.png)";
var levelIcons = document.getElementById("level-icons");

levels = {
	"Firework, Katy Perry": {
		difficulty: '⭐',
		highscore: localStorage.getItem("Firework") || "--",
		link: "Firework"
	},
	"Rare, Selena Gomez": {
		difficulty: '⭐',
		highscore: localStorage.getItem("Rare") || "--",
		link: "Rare"
	},
	"Bad Guy, Billie Eilish": {
		difficulty: '⭐⭐',
		highscore: localStorage.getItem("Bad Guy") || "--",
		link: "BadGuy"
	},
	"That's What I Like, Bruno Mars": {
		difficulty: '⭐⭐',
		highscore: localStorage.getItem("That's What I Like") || "--",
		link: "ThatWhatILike"
	},
	"Thrift Shop, Macklemore": {
		difficulty: '⭐⭐⭐',
		highscore: localStorage.getItem("That's What I Like") || "--",
		link: "ThriftShop"
	}
}


for (let l of Object.entries(levels)){
	levelIcons.innerHTML += `<a class="stage" href="/game.html#${l[1].link}">
		<p>${l[0]}</p>
		<p>${l[1].highscore}%</p>
		<p>${l[1].difficulty}</p>
	</div>`;
}

