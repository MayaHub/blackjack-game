// let player = {
//     name: "Maya",
//     chips: 200
// }

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false; //still in the game

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let startBtnEl = document.getElementById("start-btn")
let newBtnEl = document.getElementById("new-btn");
let restartBtnEl = document.getElementById("restart-btn")
// let playerEl = document.getElementById("player-el");

// playerEl.textContent = player.name + ": $"+ player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  }
  return randomCard;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  newBtnEl.style.display = "block";
  startBtnEl.style.display = "none";
  restartBtnEl.style.display = "none";
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    restartBtnEl.style.display = "block";
    newBtnEl.style.display = "none";
  } else {
    message = "You're out of the game!";
    isAlive = false;
    restartBtnEl.style.display = "block";
    newBtnEl.style.display = "none";
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

  function restartGame() {
    cardsEl.textContent = "";
    sumEl.textContent = "";
    messageEl.textContent = "Press Start";
    startBtnEl.style.display = "block";
    restartBtnEl.style.display = "none"
  }
