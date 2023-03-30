import { createNewDeck, shuffle, drawCard } from "./deckLogic";
import { Card } from "../types";

const dealCards = (deck: Card[]): Card[][] => {
  const player1 = deck.slice(0, deck.length / 2);
  const player2 = deck.slice(deck.length / 2);
  return [player1, player2];
};

export const playWar = (player1Deck: Card[], player2Deck: Card[]): void => {
  while (player1Deck.length > 0 && player2Deck.length > 0) {
    const [card1, remainingPlayer1Deck] = drawCard(player1Deck);
    const [card2, remainingPlayer2Deck] = drawCard(player2Deck);

    alert(`Player 1 drew ${card1.value}${card1.suit}`);
    alert(`Player 2 drew ${card2.value}${card2.suit}`);

    const compareResult = compareCards(card1, card2);

    if (compareResult === 0) {
      alert("Draw!");
      playWar(remainingPlayer1Deck, remainingPlayer2Deck);
    } else if (compareResult > 0) {
      const player1Deck = [...remainingPlayer1Deck];
      player1Deck.push(card1);
      player1Deck.push(card2);

      alert("Player 1 wins round!");
      playWar(player1Deck, remainingPlayer2Deck);
    } else {
      const player2Deck = [...remainingPlayer2Deck];
      player2Deck.push(card1);
      player2Deck.push(card2);

      alert("Player 2 wins the round!");

      playWar(remainingPlayer1Deck, player2Deck);
    }
  }
};

export const compareCards = (card1: Card, card2: Card): number => {
  const rank1 = getRankValue(card1.value);
  const rank2 = getRankValue(card2.value);

  if (rank1 > rank2) {
    return 1;
  } else if (rank1 < rank2) {
    return -1;
  } else {
    return 0;
  }
};

export const getRankValue = (rank: string): number => {
  switch (rank) {
    case "A":
      return 14;
    case "K":
      return 13;
    case "Q":
      return 12;
    case "J":
      return 11;
    default:
      return parseInt(rank);
  }
};

export const startGame = (): void => {
  const deck = createNewDeck();
  const shuffledDeck = shuffle(deck);
  const [player1Deck, player2Deck] = dealCards(shuffledDeck);

  alert("Game starts!");
  alert(`Player 1 deck: ${player1Deck.length} cards`);
  alert(`Player 2 deck: ${player2Deck.length} cards`);

  const winner = playWar(player1Deck, player2Deck);

  if (winner === null) {
    alert("Draw!");
  } else {
    alert(`The winner is ${winner}!`);
  }
};
