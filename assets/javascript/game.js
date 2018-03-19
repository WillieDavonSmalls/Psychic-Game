//alphabet array
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var letter = alpha[Math.floor(Math.random() * alpha.length)];

//variables to track wins and losses
var winCount = 0; 
var lossCount = 0;  
var lettersGuesed = [];
var attemptCount = 10;


document.onkeypress = function(event) {
		
	var guess = event.key;
	var resetGame = false;
	
	attemptCount--;

	if(guess === letter){
		//win and reset game
		winCount++;
		resetGame = true;
	} else {
		lettersGuesed.push(guess);
    }
	
	if(lettersGuesed.length == 10){
		//lose and reset game
		lossCount++;
		resetGame = true;
    }
    
	//reset the game and reset the letter for the alphabet
	if(resetGame) {
		letter = alpha[Math.floor(Math.random() * alpha.length)];
		lettersGuesed = [];
		attemptCount = 10;

	}
        
    document.getElementById('numWins').innerHTML = 'Wins: ' + winCount;
    document.getElementById('numLosses').innerHTML = 'Losses: ' + lossCount;
    document.getElementById('numGuessesLeft').innerHTML = 'Guesses Left: ' + attemptCount;
    document.getElementById('lettersGuessed').innerHTML = 'Your Guesses So Far: ' + lettersGuesed.join();
}
