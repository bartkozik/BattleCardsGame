import api from "api";
import { AxiosResponse } from "axios";

export function createNewDeck(): Promise<AxiosResponse<any>> {
  // 'any' to be typed properly
  return api.post("/deck/new/");
}
