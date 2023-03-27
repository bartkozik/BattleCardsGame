import api from "api";
import { DeckResponse } from "./models";

export function createNewDeck(): Promise<DeckResponse> {
  return api.post("/deck/new/");
}
