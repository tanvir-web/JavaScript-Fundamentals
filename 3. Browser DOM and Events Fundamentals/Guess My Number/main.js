/*
// Reading content of the element
console.log(document.querySelector('.message').textContent);

// Writing conetent in the element
document.querySelector('.message').textContent = "Correct Number!";

// Getting dynamic value
document.querySelector('.number').value = 23;
*/

"use strict";

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".number").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Please insert A number!";
  } else if (guess === hiddenNumber) {
    document.querySelector(".message").textContent = "You WIN this game!";
    document.querySelector(".hidden").textContent = hiddenNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    // High Score

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess < hiddenNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game :( ";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game :( ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Reset Process

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#fff";
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".hidden").textContent = "?";
  document.querySelector(".number").textContent = " ";
});
