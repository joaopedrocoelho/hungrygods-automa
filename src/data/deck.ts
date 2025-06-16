import type { Card } from "../types/card";

export const deck: Card[] = [
  // terra God
  {
    god: "terra",
    direction: "clockwise",
    turns: 1,
  },
  {
    god: "terra",
    direction: "counter-clockwise",
    turns: 1,
  },
  {
    god: "terra",
    direction: "clockwise",
    turns: 2,
  },
  {
    god: "terra",
    direction: "counter-clockwise",
    turns: 2,
  },
  {
    god: "terra",
    direction: "clockwise",
    turns: 3,
  },
  {
    god: "terra",
    direction: "counter-clockwise",
    turns: 3,
  },
  // agua God
  {
    god: "agua",
    direction: "clockwise",
    turns: 1,
  },
  {
    god: "agua",
    direction: "counter-clockwise",
    turns: 1,
  },
  {
    god: "agua",
    direction: "clockwise",
    turns: 2,
  },
  {
    god: "agua",
    direction: "counter-clockwise",
    turns: 2,
  },
  {
    god: "agua",
    direction: "clockwise",
    turns: 3,
  },
  {
    god: "agua",
    direction: "counter-clockwise",
    turns: 3,
  },
  // sol God
  {
    god: "sol",
    direction: "clockwise",
    turns: 1,
  },
  {
    god: "sol",
    direction: "counter-clockwise",
    turns: 1,
  },
  {
    god: "sol",
    direction: "clockwise",
    turns: 2,
  },
  {
    god: "sol",
    direction: "counter-clockwise",
    turns: 2,
  },
  {
    god: "sol",
    direction: "clockwise",
    turns: 3,
  },
  {
    god: "sol",
    direction: "counter-clockwise",
    turns: 3,
  },
  // morte God
  {
    god: "morte",
    direction: "clockwise",
    turns: 1,
  },
  {
    god: "morte",
    direction: "counter-clockwise",
    turns: 1,
  },
  {
    god: "morte",
    direction: "clockwise",
    turns: 2,
  },
  {
    god: "morte",
    direction: "counter-clockwise",
    turns: 2,
  },
  {
    god: "morte",
    direction: "clockwise",
    turns: 3,
  },
  {
    god: "morte",
    direction: "counter-clockwise",
    turns: 3,
  },
  // sabedoria God
  {
    god: "sabedoria",
    direction: "clockwise",
    turns: 1,
  },
  {
    god: "sabedoria",
    direction: "counter-clockwise",
    turns: 1,
  },
  {
    god: "sabedoria",
    direction: "clockwise",
    turns: 2,
  },
  {
    god: "sabedoria",
    direction: "counter-clockwise",
    turns: 2,
  },
  {
    god: "sabedoria",
    direction: "clockwise",
    turns: 3,
  },
  {
    god: "sabedoria",
    direction: "counter-clockwise",
    turns: 3,
  },
];

export const godEmojis: Record<string, string> = {
  terra: "🌳",
  agua: "🌊",
  sol: "🌞",
  morte: "🦂",
  sabedoria: "🌟",
};

export const directionEmojis: Record<string, string> = {
  clockwise: "↻",
  "counter-clockwise": "↺",
};
