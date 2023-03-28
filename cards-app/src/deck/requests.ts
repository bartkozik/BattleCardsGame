import api from "api";
import { DeckResponse } from "./models";

export function createNewDeck(): Promise<DeckResponse> {
  return api.post("/deck/new/");
}

export async function fetchNewCards(deckId: string): Promise<DeckResponse> {
  return api.get(`/deck/${deckId}/draw/?count=52`);
}
