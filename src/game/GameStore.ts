import { makeAutoObservable } from "mobx";
import { action } from "mobx";
import { RootStore } from "RootStore";
import { Card } from "deck/models";
import { cardValueHelper } from "utils/cardValueHelper";
import { saveToSessionStorage, getFromSessionStorage } from "utils/sessionStorageHelpers";
import {
  PLAYER_SCORE_STORAGE_NAME,
  COMPUTER_SCORE_STORAGE_NAME,
  WINNERS_MESSAGE_STORAGE_NAME
} from "utils/constants";

const BASE_SCORE = 0;

class GameStore {
  rootStore: RootStore;

  playerScore = 0;
  computerScore = 0;
  winnerMessage = "";
  isComputerCardRevealed = false;
  topCardIndex = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    const savedData = getFromSessionStorage([
      PLAYER_SCORE_STORAGE_NAME,
      COMPUTER_SCORE_STORAGE_NAME,
      WINNERS_MESSAGE_STORAGE_NAME
    ]);
    if (savedData) {
      this.playerScore = savedData.playerScore || BASE_SCORE;
      this.computerScore = savedData.computerScore || BASE_SCORE;
      this.winnerMessage = savedData.winnersMessage || "";
    }
    makeAutoObservable(this);
  }

  toggleComputerCardRevealed = action((): void => {
    this.isComputerCardRevealed = !this.isComputerCardRevealed;
  });

  setNextTopCardIndex = action((): void => {
    this.topCardIndex = Math.min(
      this.topCardIndex + 1,
      this.rootStore.deckStore.computerCards.length - 1
    );
  });

  compareCards(playerCard: Card, computerCard: Card): void {
    const playerCardValue = cardValueHelper(playerCard.value);
    const computerCardValue = cardValueHelper(computerCard.value);

    if (playerCardValue > computerCardValue) {
      this.playerScore += 1;
    } else if (playerCardValue < computerCardValue) {
      this.computerScore += 1;
    }

    this.determineWinner();
    this.rootStore.deckStore.removeTopCards(playerCard, computerCard);
    saveToSessionStorage({
      playerScore: this.playerScore,
      computerScore: this.computerScore,
      winnersMessage: this.winnerMessage
    });
  }

  determineWinner(): void {
    if (this.playerScore > this.computerScore) {
      this.winnerMessage = "You won the game!!!";
    } else if (this.playerScore < this.computerScore) {
      this.winnerMessage = "You've lost :(";
    } else {
      this.winnerMessage = "It's a tie!";
    }
  }
}

export default GameStore;
