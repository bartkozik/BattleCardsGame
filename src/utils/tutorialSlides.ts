import { Slide } from "components/TutorialModal/TutorialModal";

export const tutorialSlides: Slide[] = [
  {
    imageUrl: "/tutorialImages/Step1.png",
    description: 'Step 1: Click the "Start" button to begin a new game!'
  },
  {
    imageUrl: "/tutorialImages/Step2.png",
    description:
      "Step 2: Click on the highlighted face-down card in the center of the table to reveal the card that the computer has drawn."
  },
  {
    imageUrl: "/tutorialImages/Step3.png",
    description:
      "Step 3: Your card is visible at the bottom of the screen, while the remaining blurred cards are shown during subsequent rounds. Cards that have been compared are moved to the 'Burned Cards Pile' in the center of the table."
  },
  {
    imageUrl: "/tutorialImages/Step4.png",
    description:
      "Step 4: The battle is on! If your card is higher than the computer's drawn card, you gain a point (visible on the scoreboard in the upper right corner of the screen). If it's lower, the point goes to the computer :(. A tie doesn't award a point to anyone!!!"
  },
  {
    imageUrl: "/tutorialImages/Step5.png",
    description:
      "Step 5: The round ends when all pairs of cards have been compared (each player has 26 cards). May luck be on your side!!! If you want to play again, click the 'Play Again' button."
  }
];
