export type God = "terra" | "agua" | "sol" | "morte" | "sabedoria";
export type Direction = "clockwise" | "counter-clockwise";

export interface Card {
  god: God;
  direction: Direction;
  turns: number;
}

export interface PlayerHand {
  cards: Card[];
}
