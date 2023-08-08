'use strict';

let username = prompt("Hi, What is your name?");
console.log("User's name", username);


let middlename = prompt("How many middle names do you have?");
console.log("User's middle name amount", middlename);


let answer = prompt("Does K'hari have four middle names?").toLowerCase();
   
if (answer === "yes" || answer === "y") {
// console.log("Good job " + username + ". K'hari does indeed have 4 middle names");
alert("Good job " + username + ". K'hari does indeed have 4 middle names");
} else {
// console.log("Sorry K'hari does indeed have 4 middle names");
alert("Sorry K'hari does indeed have 4 middle names");
}