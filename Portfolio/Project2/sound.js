let playback_slider 
let init = () => {

  playback_slider = document.getElementById('playback-position-slider')

  playback_slider.setAttribute('max', mySound.duration())
}

let mySound = new Howl({
  src: 'introsound.mp3',
  loop: false, 
  onload: init 
})

let adjustVolume = (value) => {
  mySound.volume(value)
}


$( "#coffee, #art, #party" ).click(function() {
  alert( "Handler for .click() called." );
});





/*

let playSound = () => {
  mySound.play()
}

let adjustVolume = (value) => {
  mySound.volume(value)
}

let setPosition = (value) => {
	mySound.seek(value)
}

let adjustRate = (value) => {
	mySound.rate(value)
}

 
//let playback_slider

let init = () => {
	playback_slider = document.getElementById ('playback-position-slider')
playback_slider.setAttribute('max', mySound.duration())
}

let mySound

function init ()

// this is how you create a sound with HowlJS
mySound = new Howl({src: 'initialdialogue.wav'})
  autoplay: true, //this is the path to the sound (required)
  loop: true, //and then optionally you can define whether it will loop (by default, false)
  onload: init //we can also have even listeners! this here will call a function once the sound is totally loaded
})



// this one adjusts the volume.
// the argument is the value of the slide on the HTML page
let adjustVolume = (value) => {
  theSound.volume(value)
}
};

let mySound;

 preload = () =>{

	mySound = loadSound("initialdialogue.wav");

}

 setup = () => {
	createCanvas (200, 200);
	mySound.play()
}
*/

