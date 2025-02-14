const { evaluateGuess } = require('./card');

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
    console.log(`----------** Round Over! ** You answered ${calculatePercentageCorrect(round)}% of the questions correctly!----------`);
    console.log(`----------------------------------------------------------------------------------`);
    console.log(`----------------------------------------------------------------------------------`);
    console.log(`----------------------------------------------------------------------------------`);
    return `** Round Over! ** You answered ${calculatePercentageCorrect(round)}% of the questions correctly!`;
}



module.exports = {
    createRound,
    takeTurn,
    calculatePercentageCorrect,
    endRound
}