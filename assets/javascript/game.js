//alphabet array
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//variables to track wins and losses
var wins = 0; 
var losses = 0; 
var attempts = 10; 

//random letter selector
var letter = alpha[Math.round(Math.random() * alpha.length)];