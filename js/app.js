"use strict";

let playGame = confirm("Do you want to play a game?");

if (playGame) {
  let userScore = 0;

let username = prompt("Hi, What is your name?");
console.log("User's name", username);

let myBirth = prompt("Was Khari born in Wisconsin?").toLowerCase();

if (myBirth === 'yes' || myBirth === 'y') {
  alert("Good job " + username + ". K'hari was born in Wisconsin");
  userScore++;
  console.log("userScore: ", userScore);
} else {
  alert("No K'hari was indeed born in Wisconsin");
}

let middleName = prompt("Does K'hari have four middle names?").toLowerCase();
   
if (middleName === 'yes' || middleName === 'y') {
  userScore++;
  console.log("userScore: ", userScore);
alert("Good job " + username + ". K'hari does indeed have 4 middle names");
} else {
alert("Sorry K'hari does indeed have 4 middle names");
}

let myLocation = prompt("Does K'hari live in California?").toLowerCase();

if (myLocation === 'no' || myLocation === 'n') {
  userScore++;
  console.log("userScore: ", userScore);
  alert("Good job " + username + ". K'hari lives in Louisiana!");
  } else {
  alert("Sorry K'hari doesn't live in California");
  }


let mySiblings = prompt("Does K'hari have seven siblings?").toLowerCase();

if (mySiblings === 'yes' || mySiblings === 'y') {
  userScore++;
  console.log("userScore: ", userScore);
  alert("Good job " + username + ". K'hari does indeed have 7 siblings");
  } else {
  alert("Wrong K'hari does have 7 siblings");
  }

let correctAnswer = 4;
let userGuess;

while (correctAnswer !== userGuess) {
  userGuess = prompt("Guess how many middle names does K'hari have?")
  userGuess = parseInt(userGuess);

  if (userGuess < correctAnswer) {
    alert("Too low!")
  } else if (userGuess > correctAnswer) {
    alert("Too high");
  } else if (userGuess === correctAnswer) {
    alert("Somebody was paying attention! K'hari does indeed have " + correctAnswer + " middle names");
    userScore++;
  }
}

let interestsArray = [
  "Mclaren 720s",
  "Shelby GT500",
  "Ford GT",
  "Audi R8",
  "Lamborghini Aventador SVJ",
  "Tesla X Plaid",
  "Hellcat Durango",
  "Trackhawk",
  "AMG GT63 S",
  "Porsche Turbo S",
];

let attempts = 3;

hasAttempts: while (attempts !== 0) {
  attempts--;
  userGuess = prompt("Can you guess one of my top 10 dream cars?");

  for (let i = 0; i < interestsArray.length; i++) {
    if (userGuess === interestsArray[i]) {
      userScore++;
      alert("Yes! " + interestsArray[i] + " is on the list.");
      break hasAttempts;
    }
  }

  if (attempts > 0) {
    alert("Wrong, Try again! You have " + attempts + " attempts left.");
  } else {
    alert("You're out of attempts. The correct answers are: " +
      interestsArray.join(", "));
  }
}

alert("Amazing! Your score is " + userScore);
}