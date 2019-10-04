const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

let card1, card2, card3, deck;

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  deck = new Deck([card1, card2, card3]);
})

describe('Deck', function() {

  it ('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it ('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it ('should store cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it ('should show how many cards are in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  });
});