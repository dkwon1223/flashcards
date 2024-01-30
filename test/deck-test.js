const chai = require('chai');
const expect = chai.expect;
const { createCard } = require("../src/card");

const { createDeck, countCards } = require('../src/deck');

describe("createDeck", function() {
    it("should be a function", function() {
        expect(createDeck).to.be.a("function");
    });

    it("should create an array of card objects", function() {
        const card1 = createCard(1, "What do we call a position in an array?", ["object", "string", "index"], "index");
        const card2 = createCard(2, "What is the biggest U.S state?", ["Texas", "Montana", "Alaska"], "Alaska");
        const card3 = createCard(3, "How many licks to get to the center of a Tootsie Pop?", [365, 54, 112], 365);
        const cards = [card1, card2, card3];
        const deck = createDeck(cards);

        expect(deck).to.deep.equal(cards);
    });
});

describe("countCards", function() {
    it("should be a function", function() {
        expect(countCards).to.be.a("function");
    });

    it("should return the number of cards in a deck", function() {
        const card1 = createCard(1, "What do we call a position in an array?", ["object", "string", "index"], "index");
        const card2 = createCard(2, "What is the biggest U.S state?", ["Texas", "Montana", "Alaska"], "Alaska");
        const card3 = createCard(3, "How many licks to get to the center of a Tootsie Pop?", [365, 54, 112], 365);
        const cards = [card1, card2, card3];
        const deck = createDeck(cards);
        const count = countCards(deck);

        expect(count).to.equal(3);
    });
});