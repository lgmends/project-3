// document.write("hello world from external file");

// variables
// let, const, var
// var is a global variable
// for variables: declare, initialise and call
// let myname;
// myname = "Gloria";
// document.writeln(myname);

// writeln puts a space after the name
// write does not put a space 

// document.write("\t");

// var yourName = "Seth"
// document.write(yourName);

let randomNumber = Math.floor(Math.random()*100)+1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
