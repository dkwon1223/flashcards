const { createRound } = require('./round');
const { countCards } = require('./deck');
const util = require('./util');

function createReviewDeck(round) {
    let reviewDeck = [];
    round.incorrectGuesses.forEach((guess) => {
      round.deck.forEach((card) => {
        if(guess === card.id) {
          reviewDeck.push(card);
        }
      })
    })
    return reviewDeck;
}

function beginReview(round) {
    console.log(`----------Please review the ${round.incorrectGuesses.length} question(s) you got incorrect...-------------------- `);
    return `Please review the ${round.incorrectGuesses.length} question(s) you got incorrect...`;
}

function printReviewMessage(deck) {
    console.log(`----------You are now reattempting ${countCards(deck)} card(s)...-----------------------------------`);
}

function printReviewQuestion(round) {
    util.main(round);
  }

function startReview(deck) {
    let round = createRound(deck);
    printReviewMessage(round.deck);
    printReviewQuestion(round);
}

module.exports = {
    beginReview,
    createReviewDeck,
    printReviewMessage, 
    startReview
}