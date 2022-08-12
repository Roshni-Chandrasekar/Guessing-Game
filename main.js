let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

let buttonSubmit = document.getElementById("submit");
let buttonRestart = document.getElementById("restart");
let buttonHint = document.getElementById("hint");

let numGuess = document.getElementById("guess").value;

let guess1 = document.getElementById("guess1");
let guess2 = document.getElementById("guess2");
let guess3 = document.getElementById("guess3");
let guess4 = document.getElementById("guess4");
let guess5 = document.getElementById("guess5");

let text = document.getElementById("gameText").innerHTML;
let closeness = "";
let counter = 0;

// Handles each guess submission
buttonSubmit.addEventListener("click", function () {
  numGuess = document.getElementById("guess").value;
  console.log(numGuess);

  if (!numGuess) {
    document.getElementById("gameText").innerHTML = "That is an invalid guess";
  } else if (numGuess < 0 || numGuess > 100) {
    document.getElementById("gameText").innerHTML = "That is an invalid guess";
  } else if (numGuess && counter < 5) {
    counter += 1;
    // differences...
    if (Math.abs(randomNum - numGuess) <= 10) {
      closeness = "You're burning up!";
    } else if (Math.abs(randomNum - numGuess) <= 25) {
      closeness = "You're lukewarm!";
    } else if (Math.abs(randomNum - numGuess) > 25) {
      closeness = "You're ice cold!";
    }
    if (numGuess == randomNum) {
      document.getElementById("gameText").innerHTML =
        "You Win! The winning number was " + randomNum + ".";
    } else if (numGuess < randomNum) {
      document.getElementById("gameText").innerHTML =
        closeness + " Guess higher!";
    } else if (numGuess > randomNum) {
      document.getElementById("gameText").innerHTML =
        closeness + " Guess lower!";
    }

    if (counter === 1) {
      guess1.textContent = numGuess;
    } else if (counter === 2) {
      guess2.textContent = numGuess;
    } else if (counter === 3) {
      guess3.textContent = numGuess;
    } else if (counter === 4) {
      guess4.textContent = numGuess;
    }
  }

  if (counter === 5 && numGuess != randomNum) {
    document.getElementById("guess5").textContent = numGuess;
    document.getElementById("gameText").innerHTML =
      "You Lose! The winning number was " + randomNum + ".";
  } else if (counter === 5 && numGuess == randomNum) {
    document.getElementById("guess5").textContent = numGuess;
    document.getElementById("gameText").innerHTML =
      "You Win! The winning number was " + randomNum + ".";
  }

  document.getElementById("guess").value = "";
});

// Handles restarting the game
buttonRestart.addEventListener("click", function () {
  counter = 0;
  randomNum = Math.floor(Math.random() * 101);
  document.getElementById("guess1").textContent = "?";
  document.getElementById("guess2").textContent = "?";
  document.getElementById("guess3").textContent = "?";
  document.getElementById("guess4").textContent = "?";
  document.getElementById("guess5").textContent = "?";

  document.getElementById("hintText").innerHTML = "";
  closeness = "";

  document.getElementById("gameText").innerHTML =
    "Guess a number between 0 - 100";

  console.log(randomNum);
});

buttonHint.addEventListener("click", function () {
  let numArr = [];
  numArr.push(Math.floor(Math.random() * 101));
  numArr.push(Math.floor(Math.random() * 101));
  numArr.push(randomNum);

  rand1 = Math.floor(Math.random() * 3);
  rand2 = Math.floor(Math.random() * 2);
  rand3 = Math.floor(Math.random() * 1);

  document.getElementById("hintText").innerHTML =
    "The number is either " +
    numArr.splice(rand1, 1) +
    ", " +
    numArr.splice(rand2, 1) +
    ", " +
    "or " +
    numArr.splice(rand3, 1);
});
