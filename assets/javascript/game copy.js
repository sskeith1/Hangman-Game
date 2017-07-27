//Componenets
	var wins = 0;
	var losses = 0;

	var guessesCount = 10;
	var guessesMade = [];

	var guess = null;
	var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// User Guesses
	var changeGuessesMade = function() {
	document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessesMade.join(', ');
	};


//Change guessesTotal
	var changeGuessesTotal = function() {
		return document.querySelector('#guessesTotal').innerHTML = "Guesses left: " + guessesTotal;
	};


//Choice Options (Computer)
	var computerChoice = function(){
	return computerGuess = options[Math.floor(Math.random() * options.length)];
	}

//Change Guess
	var changeChoice = function(){
	return computerGuess = options[Math.floor(Math.random() * options.length)];
	}

// Reset
	var reset = function() {
		guessesCount = 10;
		guessesTotal = 10;
		guessesMade = [];
	};

//User Guesses
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//Outcomes (Win vs. Loss)
		if(!computerGuess){
			computerGuess = computerChoice()
		}

		if (guessesCount != 0){
			if (userGuess == computerGuess){
		    	wins++;
		    	document.querySelector('#wins').innerHTML = "Wins: " + wins;
		    	alert("Alright, Professor X!");
		    	reset();
			}else{
				guess--;
			}
			
		} else{
			losses++;
			document.querySelector('#losses').innerHTML = "Losses: " + losses;
			alert("Not quite, normie! Try again!");
			reset();
		}
		
};


