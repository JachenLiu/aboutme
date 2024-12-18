import React, { useState } from 'react';
import '../styles/cards.css';

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

function createDeck() {
  const deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

export default function Cards() {
  const [deck, setDeck] = useState(createDeck());
  const [drawnCard, setDrawnCard] = useState(null);

  const shuffleDeck = () => {
    setDeck((prevDeck) => [...prevDeck].sort(() => Math.random() - 0.5));
  };

  const drawCard = () => {
    if (deck.length > 0) {
      const newDeck = [...deck];
      const card = newDeck.pop();
      setDeck(newDeck);
      setDrawnCard(card);
    } else {
      alert('No more cards in the deck!');
    }
  };

  return (
    <div className="cards-container">
      <div className="buttons">
        <button onClick={shuffleDeck}>Shuffle Deck</button>
        <button onClick={drawCard}>Draw Card</button>
      </div>
      <div id="card-deck">
        {deck.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{
              backgroundImage: `url('/cards/${card.value}_of_${card.suit}.png')`,
            }}
          ></div>
        ))}
      </div>
      {drawnCard && (
        <div id="drawn-card">
          You drew the {drawnCard.value} of {drawnCard.suit}
        </div>
      )}
    </div>
  );
}
