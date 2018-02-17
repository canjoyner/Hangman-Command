var inquirer = require("inquirer");
var words = require("./words");
var words = require("./letters");

var wrongGuess = [];
var success=[];
var guess=;

var wins= 0;
var loss = 0;
var turns = 10;

console.log(words);
startGame();

function startGame(){
	turns= 10;

	inquirer
		.prompt([
			{type:"input",
			message: "Please pick a letter",
			name:"letter"}

			])
		.then(function(inquirerResonse){
			guess=inquirerResonse;
		})


	



}