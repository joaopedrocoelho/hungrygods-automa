import type { Card as CardType } from "../types/card";
import { godEmojis, directionEmojis } from "../data/deck";

interface CardProps {
  card: CardType;
  onRemove?: () => void;
}

const cardStyles = {
  terra: "bg-green-50 border-green-700 text-green-700",
  agua: "bg-blue-50 border-blue-700 text-blue-700",
  sol: "bg-amber-50 border-amber-700 text-amber-700",
  morte: "bg-red-50 border-red-700 text-red-700",
  sabedoria: "bg-purple-50 border-purple-700 text-purple-700",
};

export function Card({ card, onRemove }: CardProps) {
  return (
    <button
      onClick={onRemove}
      className={`w-full p-3 my-1 rounded-lg cursor-pointer text-left text-4xl transition-all duration-300 flex justify-between items-center border-2 ${
        cardStyles[card.god]
      } hover:-translate-y-0.5 hover:shadow-md active:translate-y-0`}
      type="button"
    >
      <div className="flex flex-col gap-2 w-full">
        <span className="font-bold text-2xl flex items-center gap-2">
          {godEmojis[card.god]}
        </span>
        <span className="text-xl flex items-center gap-2">
          <strong>{card.turns}</strong>
          {directionEmojis[card.direction]}
        </span>
      </div>
    </button>
  );
}
