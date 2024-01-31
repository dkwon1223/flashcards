const chai = require('chai');
const expect = chai.expect;
const { createCard } = require("../src/card");
const { createDeck } = require("../src/deck");

const { createRound, takeTurn, calculatePercentageCorrect } = require('../src/round');

describe("createRound", function() {
    beforeEach(() => {
        card1 = createCard(1, "What do we call a position in an array?", ["object", "string", "index"], "index");
        card2 = createCard(2, "What is the biggest U.S state?", ["Texas", "Montana", "Alaska"], "Alaska");
        card3 = createCard(3, "How many licks to get to the center of a Tootsie Pop?", [365, 54, 112], 365);
        cards = [card1, card2, card3];
        deck = createDeck(cards);
        round = createRound(deck);
    })

    it("should be a function", function() {
        expect(createRound).to.be.a("function");
    });

    it("should have deck property that holds deck object", function() {
        expect(round.deck).to.deep.equal(deck);
    });

    it("should start with first card in the deck", function() {
        expect(round.currentCard).to.equal(deck[0]);
    });

    it("should start at 0 turns", function() {
        expect(round.turns).to.equal(0);
    });

    it("should not have any incorrect guesses", function() {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });
})

describe("takeTurn", function() {
    beforeEach(() => {
        card1 = createCard(1, "What do we call a position in an array?", ["object", "string", "index"], "index");
        card2 = createCard(2, "What is the biggest U.S state?", ["Texas", "Montana", "Alaska"], "Alaska");
        card3 = createCard(3, "How many licks to get to the center of a Tootsie Pop?", [365, 54, 112], 365);
        cards = [card1, card2, card3];
        deck = createDeck(cards);
        round = createRound(deck);
    })
    
    it("should be a function", function() {
        expect(takeTurn).to.be.a("function");
    });

    it("should update turns count for both correct and incorrect guesses", function() {
        takeTurn("index", round);
        expect(round.turns).to.equal(1);
        takeTurn("Texas", round);
        expect(round.turns).to.equal(2);
    });

    it("should flip to next card", function() {
        takeTurn("index", round);
        expect(round.currentCard).to.deep.equal(deck[1]);
    });

    it("should return \"correct!\" for correct guesses", function() {
        let correctGuess = takeTurn("index", round);
        expect(correctGuess).to.equal("correct!");
    });

    it("should return \"incorrect!\" for incorrect guesses and store card ID in incorrectGuesses", function() {
        let incorrectGuess = takeTurn("string", round);
        expect(incorrectGuess).to.equal("incorrect!");
        expect(round.incorrectGuesses).to.deep.equal([round.currentCard.id]);
    });

});

describe("calculatePercentageCorrect", function() {
    it("should be a function", function() {
        expect(calculatePercentageCorrect).to.be.a("function");
    });

    it("should calculate and return the percentage of correct guesses rounded to nearest whole percent", function() {
        card1 = createCard(1, "What do we call a position in an array?", ["object", "string", "index"], "index");
        card2 = createCard(2, "What is the biggest U.S state?", ["Texas", "Montana", "Alaska"], "Alaska");
        card3 = createCard(3, "How many licks to get to the center of a Tootsie Pop?", [365, 54, 112], 365);
        cards = [card1, card2, card3];
        deck = createDeck(cards);
        round = createRound(deck);
        takeTurn("index", round);
        takeTurn("Texas", round);
        takeTurn(365, round);

        let calculation = calculatePercentageCorrect(round);

        expect(calculation).to.equal(67);
    });
});