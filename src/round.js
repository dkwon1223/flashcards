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
    if(result === "incorrect!") {
        round.incorrectGuesses.push(round.currentCard.id);
        round.currentCard = round.deck[round.deck.indexOf(round.currentCard) + 1];
        return result;
    } else {
        round.currentCard = round.deck[round.deck.indexOf(round.currentCard) + 1];
        return result;
    }
}   

function calculatePercentageCorrect(round) {
    return Math.round(((round.turns-round.incorrectGuesses.length)*100)/round.turns);
}

function endRound(round) {
    console.log(`** Round Over! ** You answered ${calculatePercentageCorrect(round)}% of the questions correctly!`);
    return `** Round Over! ** You answered ${calculatePercentageCorrect(round)}% of the questions correctly!`;
}

function beginReview(round) {
    console.log(`Please reattempt the ${round.incorrectGuesses.length} question(s) you got incorrect...`);
    return `Please reattempt the ${round.incorrectGuesses.length} question(s) you got incorrect...`;
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentageCorrect,
    endRound,
    beginReview
}