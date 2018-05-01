let Shamoon
let Zayed

document.addEventListener(
	"DOMContentLoaded", init)

	function init(){
		Shamoon=document.getElementById("shamoon")
		Zayed=document.getElementById("ibrahimi")
		Shamoon.addEventListener("mouseover", MakeBigger)
		Shamoon.addEventListener("mouseout", MakeSmaller)
	}

function MakeBigger(){
	Shamoon.style.width="30%"
}

function MakeSmaller(){
	Shamoon.style.width="25%";
	alert("Make sure to watch the video!")
}