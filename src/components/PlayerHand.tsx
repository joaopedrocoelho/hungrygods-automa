import type { Card } from "../types/card";
import { Card as CardComponent } from "./Card";

interface PlayerHandProps {
  playerIndex: number;
  cards: Card[];
  onRemoveCard: (cardIndex: number) => void;
}

export function PlayerHand({
  playerIndex,
  cards,
  onRemoveCard,
}: PlayerHandProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 my-4">
      <div className="font-bold text-gray-700 mb-4 pb-2 border-b-2 border-green-500 text-2xl">
        Player {playerIndex + 1}'s Cards:
      </div>
      <ul className="flex flex-row  items-center justify-center gap-2.5 w-full m-0 p-0 list-none">
        {cards.map((card, cardIndex) => (
          <li key={cardIndex} className="w-fit">
            <CardComponent
              card={card}
              onRemove={() => onRemoveCard(cardIndex)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
