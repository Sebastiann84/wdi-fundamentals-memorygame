
// Creating 4 varialbles for the 4 cards
/* var cardOne = "Queen of Hearts";
var cardTwo = "Queen of Diamonds";
var cardThree = "King of Hearts";
var cardFour = "King of Diamonds";
console.log("User  flipped " + cardOne + ".");
console.log("User  flipped " + cardFour + ".");
*/

//alert('Hello, friends.');
// this array holds the four cards
var cards = ["Queen","Queen","King","King"];
// Creating an empty array to store the cards that are in play
var cardsInPlay = [];
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again!");
  }
 };
// creating a function to store all steps that should take place when user flips card
function flipCard(cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
};
flipCard(0);
flipCard(2);
checkForMatch();
