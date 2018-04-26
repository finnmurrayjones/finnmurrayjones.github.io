let Shamoon
let Zayed

document.addEventListener(
	"DOMContentLoaded", init)

	function init(){
		Shamoon=document.getElementById("shamoon")
		Zayed=document.getElementById("video")
		Shamoon.addEventListener("mouseover", MakeBigger)
		Shamoon.addEventListener("mouseclick", DisplayZayed)
		Shamoon.addEventListener("mouseout", MakeSmaller)
	}

function MakeBigger(){
	Shamoon.style.width="30%"
}

function MakeSmaller(){
	Shamoon.style.width="25%"
}

function DisplayZayed(){
	Zayed.style.display="block"
}