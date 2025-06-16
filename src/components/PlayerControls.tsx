interface PlayerControlsProps {
  playerCount: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onDeal: () => void;
}

export function PlayerControls({
  playerCount,
  onIncrease,
  onDecrease,
  onDeal,
}: PlayerControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4 my-5 flex-wrap">
      <h3 className="text-2xl font-bold">Players</h3>
      <button
        onClick={onDecrease}
        disabled={playerCount <= 2}
        className="px-4 py-1 bg-green-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-70 hover:bg-green-600 disabled:hover:bg-gray-300 text-lg"
      >
        -
      </button>
      <span className="text-2xl font-bold min-w-[30px]">{playerCount}</span>
      <button
        onClick={onIncrease}
        disabled={playerCount >= 6}
        className="px-4 py-1 bg-green-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-70 hover:bg-green-600 disabled:hover:bg-gray-300 text-lg"
      >
        +
      </button>
      <button
        onClick={onDeal}
        className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-lg"
      >
        Deal Cards
      </button>
    </div>
  );
}
