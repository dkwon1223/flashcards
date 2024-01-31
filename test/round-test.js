const chai = require('chai');
const expect = chai.expect;
const { createCard } = require("../src/card");
const { createDeck } = require("../src/deck");

const { createRound } = require('../src/round');

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
        
    });

});