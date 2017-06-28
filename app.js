window.addEventListener('keydown', function(e){ //event listener for key press
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	console.log(audio);
	if(!audio)
		return;
	audio.currentTime=0; //set audio time to 0 to help w/ fades
	audio.play(); //play current audio file
	key.classList.add('playing'); //add "playing" CSS class
});

const keys = document.querySelectorAll('.key'); //get all keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //add transition event for each key

function removeTransition(e){ //get rid of transition function
	if(e.propertyName !== 'transform') 
		return;
	this.classList.remove('playing');

}
