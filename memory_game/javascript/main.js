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
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    alert ("Sorry, try again!");
  }
 };
// creating a function to store all steps that should take place when user flips card
function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
};

flipCard(0);
flipCard(2);
checkForMatch();
