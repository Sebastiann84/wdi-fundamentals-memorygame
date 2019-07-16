// this object holds the properties an values for four cards
var cards = [
  {
    rank: "Queen",
    suit: "Hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "Queen",
    suit: "Diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "King",
    suit: "Hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "King",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

// Creating an empty array to store the cards that are in play
var cardsInPlay = [];

// Adding match logic wiht a conditional statement
var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again!");
    }
  }
 };

// creating a function to store all steps that should take place when user flips card
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
};

// Creatin a new game-board
var createBoard = function() {
for ( let i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img')
  cardElement.setAttribute('src', "images/back.png");
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', flipCard);
  document.getElementById('game-board').appendChild(cardElement);
}
};
createBoard();
