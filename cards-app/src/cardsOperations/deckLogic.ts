import { Suit, Rank, Card } from "../types";

export function createNewDeck(): Card[] {
  const suits: Suit[] = ["spades", "club", "hearts", "diamonds"];

  const ranks: Rank[] = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const deck: Card[] = suits.reduce((cards: Card[], suit) => {
    const suitCards = ranks.map((rank) => ({ suit, rank }));
    return [...cards, ...suitCards];
  }, []);

  return deck;
}

export function shuffle(deck: Card[]): Card[] {
  const shuffledDeck = [...deck];

  const randomIndexes = shuffledDeck.map(() => Math.random());

  shuffledDeck.sort(
    (a, b) =>
      randomIndexes[shuffledDeck.indexOf(a)] -
      randomIndexes[shuffledDeck.indexOf(b)]
  );

  return shuffledDeck;
}

export const drawCard = (deck: Card[]): [Card, Card[]] => {
  return [deck[0], deck.slice(1)];
};

export const sortDeck = (deck: Card[]): Card[] => {
  return [...deck].sort((a, b) => {
    if (a.suit < b.suit) {
      return -1;
    } else if (a.suit > b.suit) {
      return 1;
    } else {
      const rankA = isNaN(Number(a.rank))
        ? a.rank.charCodeAt(0)
        : Number(a.rank);
      const rankB = isNaN(Number(b.rank))
        ? b.rank.charCodeAt(0)
        : Number(b.rank.charCodeAt(0));
      return rankA - rankB;
    }
  });
};

export const dealCards = (deck: Card[]) => {
  const player1 = deck.slice(0, deck.length / 2);
  const player2 = deck.slice(deck.length / 2);
  return [player1, player2];
};
