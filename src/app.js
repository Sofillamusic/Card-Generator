import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 9) + 1; // generate a random number between 1 and 9
  document.getElementById("random-number").innerHTML = randomNumber; // display the random number in the card
}

window.onload = function() {
  generateRandomNumber(); // generate a random number when the page loads
};

// Array of suits
const suits = ["♣", "♦", "♥", "♠"];

// Get a random suit from the array
const randomSuit = suits[Math.floor(Math.random() * suits.length)];

let suitColor;
if (randomSuit === "♦" || randomSuit === "♥") {
  suitColor = "red";
} else {
  suitColor = "black";
}

// Insert the suit symbol and color into the HTML
const suitElement = document.querySelectorAll(".suit");
suitElement.forEach(el => {
  const suitSymbol = document.createTextNode(randomSuit);
  el.appendChild(suitSymbol.cloneNode(true));
  el.style.color = suitColor;
});
