const { evaluateGuess } = require("./card");

function createRound(deck) {
    return {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    };
}

function takeTurn(guess, round) {
    let result = evaluateGuess(guess, round.currentCard.correctAnswer);
    round.turns ++;
    round.currentCard = deck[deck.indexOf(round.currentCard) + 1];
    if(result === "incorrect!") {
        round.incorrectGuesses.push(round.currentCard.id);
        return result;
    } else {
        return result;
    }
}   

function calculatePercentageCorrect() {
    
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentageCorrect
}