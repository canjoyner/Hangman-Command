var inquirer = require("inquirer");
var Words = require("./words");
var Letters = require("./letters");

var wordBank = ["Jump","Swim","Ski","Figure_skating","Curling"];
var i = wordBank.length;
var rand = Math.floor(Math.random() * i);
var wordPick = wordBank[rand];
var blanks = [];

var wrongGuess = {};
var success=[];
var guess="";

var wins= 0;
var loss = 0;
var turns = 10;
var Letters =[];

console.log(wordPick);
makeGuess();
wordchoice();


function makeGuess(){
	inquirer
		.prompt([
			{type:"input",
			message: "Please pick a letter",
			name:"letter"}

			])
		.then(function(inquirerResonse){
			guess=inquirerResonse;
			turns --;
			console.log(turns)
			console.log("you guessed"+ guess);
			compare();
		})

	}

function wordchoice(){
	for (var k=0; k < 10; k++){
			blanks.push("_ ")};
	 wordGuess = new Words (wordPick,"blanks");
		console.log(blanks)
	}

function compare(){
	for (var j=0; j<wordGuess.length; j++){
		if (letter === wordGuess[i]){
			blanks[i] = letter;
			console.log("correct")
			}
		else{
			wrongGuess.push(letter);
			console.log("try again")

		}		
	}
}