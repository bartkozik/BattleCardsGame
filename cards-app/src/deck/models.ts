import { AxiosResponse } from "axios";

export interface Deck {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}

export type DeckResponse = AxiosResponse<DeckResponse>;
