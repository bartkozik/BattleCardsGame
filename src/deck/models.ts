import { AxiosResponse } from "axios";

export interface Deck {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
  cards: Card[] | [];
}

export type Card = {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
};

export type GameCards = {
  computerCards: Card[];
  playerCards: Card[];
};

export type DeckResponse = AxiosResponse<Deck>;
