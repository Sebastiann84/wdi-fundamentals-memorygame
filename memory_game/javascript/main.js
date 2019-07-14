
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
var cards = ["queen","queen","king","king"];
// Creating an empty array to store the cards that are in play
var cardsInPlay = [];
// first card user flipped
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen.");
//sceond card user flipped
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king.")
// Adding logic to check if the user has indeed selected two cards
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
 alert("You found a match!");
} else {
  alert("Sorry, try again!");
}
