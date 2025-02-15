var player = "Player 1";
var dealer = "Dealer";
let playerDeck = []; //holds player sum
let dealerDeck = []; //holds dealer sum

function editName() {
  player = prompt("Change Player1 Name?")
  document.querySelector("p.Player1").innerHTML = player;
}
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
// this function rolls the players dice, whenever the 'hit me' button is clicked, the image on screen whill chnage to whatever is rolled
// innerText is used mulitple times, this is due to value being hidden. Text > Html for "hidden" stuff
function playerRoll() {
  let roll = rollDice();
  playerDeck.push(roll);
  document.getElementById('playerScore').innerText = "Player Score: " + getTotal(playerDeck);
  document.querySelector(".img1").setAttribute("src", "dice" + roll + ".jpg");
  }
function getTotal(rolls) {
  return rolls.reduce((acc, val) => acc + val, 0); // had to refer to a users question on StackOverflow for a similiar string
}
// hidden unless clicked by player
function checkScore() {
  document.getElementById('dealerScore').style.display = "block";
  document.getElementById('dealerScore').innerText = "Dealer Score: " + getTotal(dealerDeck);
}
function stand() {
  while (getTotal(dealerDeck) < 17) { //when stand is clicked dealers turn is started
    let roll = rollDice();
    dealerDeck.push(roll); // due to amateur knowledge, all of his rolls happen at same time
    document.querySelector(".img2").setAttribute("src", "dice" + roll + ".jpg"); // Due to aformention problem, the last roll done by dealer is shown
  }
  checkWinner();
}
// compares each "deck" and announces winner
function checkWinner() {
  playerTotal = getTotal(playerDeck);
  dealerTotal = getTotal(dealerDeck);
  checkScore();
  let result = "";
  if (playerTotal > 21) {
    result = "Bust! Dealer Wins!";
  } else if (dealerTotal > 21 || playerTotal > dealerTotal) {
    result = "You Win!";
  } else if ( dealerTotal > playerTotal) {
    result = "Dealer Wins!";
  } else {
    result = "Draw!";
  }
  document.getElementById('result').innerText = result; // displays result^^^
}
