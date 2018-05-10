let Shamoon

document.addEventListener(
	"DOMContentLoaded", init)

	function init(){
		Shamoon=document.getElementById("shamoon")
		Shamoon.addEventListener("mouseover", MakeBigger)
		Shamoon.addEventListener("mouseout", MakeSmaller)
	}

function MakeBigger(){
	Shamoon.style.width="30%"
}

function MakeSmaller(){
	Shamoon.style.width="25%";
}