const { countCards } = require('./deck');
const { createRound } = require('./round');
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start(deck) {
  let round = createRound(deck);
  printMessage(round.deck);
  printQuestion(round);
}



module.exports = { printMessage, printQuestion, start };
