const { createCard } = require('./card');
const { countCards } = require('./deck');
const { createRound } = require('./round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  let fullDeck = createFullDeck(prototypeQuestions);
  let round = createRound(fullDeck);
  printMessage(round.deck);
  printQuestion(round);
}

function createFullDeck(data) {
  let deck = [];
  data.forEach((question) => {
    let card = createCard(question.id, question.question, question.answers, question.correctAnswer);
    deck.push(card);
  })
  return deck;
}

module.exports = { printMessage, printQuestion, start, createFullDeck };
