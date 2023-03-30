import api from "api";
import { DeckResponse } from "./models";

export function createNewDeck(): Promise<DeckResponse> {
  return api.post("/deck/new/");
}

export function fetchNewCards(deckId: string): Promise<DeckResponse> {
  return api.get(`/deck/${deckId}/draw/?count=52`);
}

export function shuffleDeck(deckId: string): Promise<DeckResponse> {
  return api.get(`/deck/${deckId}/shuffle/?remaining=true`);
}
