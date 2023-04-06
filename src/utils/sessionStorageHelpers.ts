import { Card } from "deck/models";
import { SESSION_STORAGE_KEY } from "utils/constants";

export type SessionData = {
  computerCards?: Card[];
  playerCards?: Card[];
  burnedCards?: Card[];
  pairsToCompare?: number;
  playerScore?: number;
  computerScore?: number;
  winnersMessage?: string;
};

const generateSessionStorageField = (field: string): string => {
  return `${SESSION_STORAGE_KEY}_${field}`;
};

export const saveToSessionStorage = (data: Partial<SessionData>): void => {
  for (const [field, value] of Object.entries(data)) {
    const session_storage_field = generateSessionStorageField(field);
    sessionStorage.setItem(session_storage_field, JSON.stringify(value));
  }
};

export const getFromSessionStorage = (
  fields: (keyof SessionData)[]
): Partial<SessionData> | null => {
  const data: Partial<SessionData> = {};

  for (const field of fields) {
    const session_storage_field = generateSessionStorageField(field as string);
    const savedValue = sessionStorage.getItem(session_storage_field);
    if (savedValue) {
      data[field] = JSON.parse(savedValue);
    }
  }

  return Object.keys(data).length > 0 ? data : null;
};

export const removeFromSessionStorage = (fields: string[]): void => {
  for (const field of fields) {
    const session_storage_field = generateSessionStorageField(field);
    sessionStorage.removeItem(session_storage_field);
  }
};
