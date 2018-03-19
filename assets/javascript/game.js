//alphabet array
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



var letter = alpha[Math.round(Math.random() * alpha.length)];

//variables to track wins and losses
var winCount = 0; 
var lossCount = 0; 
var attemptCount = 10; 
var lettersGuesed = []

for (i=0; i<attemptCount; i++){

    document.onkeypress = function(event) {

    
        var guess = event.key;
        if (guess === letter){
            winCount = winCount++;
        } else{
            lettersGuesed.push(guess);
        }
        if(lettersGuesed.length == 10){
            lossCount = lossCount++;
        }
    var attemptsLeft = attemptCount - lettersGuesed.length    
    document.getElementById('numWins').innerHTML = 'Wins: ' + winCount;
    document.getElementById('numLosses').innerHTML = 'Losses: ' + lossCount;
    document.getElementById('numGuessesLeft').innerHTML = 'Guesses Left: ' + attemptsLeft;
    document.getElementById('lettersGuessed').innerHTML = 'Your Guesses So Far: ' + lettersGuesed.join();
    }



} 