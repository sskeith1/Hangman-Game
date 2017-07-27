//Componenets
	var wins = 0;
	var losses = 0;
	var guesses = 10;
	var guessesMade = [];

	var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
	 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variables
	var newLetter = options[Math.floor(Math.random() * options.length)];

	var reset = function() {
	guesses = 10;
	guessesMade = [];
	newLetter;
	};

	console.log()

//Main
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
		guesses--;

		document.querySelector('#guesses').innerHTML = "Guesses Left: " + guesses;

		guessesMade.push(userGuess);
		document.querySelector('#guessesMade').innerHTML = "Your Guesses so far: " + guessesMade;


		console.log(guessesMade);
		

		if(userGuess === newLetter) {
			wins++;
			document.querySelector('#wins').innerHTML = "Wins: " + wins;
			console.log(wins);
			reset();
		} 
		else if (guesses === 0){
			losses++;
			document.querySelector('#losses').innerHTML = "Losses: " + losses;
			console.log(losses);
			reset();
		}

		if(userGuess!==options) {
			
		}
	};