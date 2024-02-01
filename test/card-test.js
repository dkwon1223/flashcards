const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('createCard', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe("evaluateGuess", function() {
  beforeEach(() => {
    card = {
      id: 1,
      question: "How many cans of beans can you eat before farting excessively?",
      answers: [5, 7, 11],
      correctAnswer: 5
    }
  });

  it("should be a function", function() {
    expect(evaluateGuess).to.be.a("function");
  });

  it("should evaluate if the guess is correct", function() {
    let evaluation = evaluateGuess(5, card.correctAnswer);

    expect(evaluation).to.equal("correct!");
  });

  it("should evaluate whether a guess is incorrect", function() {
    let evaluation = evaluateGuess(19, card.correctAnswer);

    expect(evaluation).to.equal("incorrect!");
  });
});


