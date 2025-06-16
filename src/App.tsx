import { useState } from "react";
import type { Card } from "./types/card";
import { deck } from "./data/deck";
import { PlayerControls } from "./components/PlayerControls";
import { RandomGenerator } from "./components/RandomGenerator";
import { PlayerHand } from "./components/PlayerHand";
import "./App.css";
import Board from "./components/board/Board";

function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

function App() {
  const [playerCount, setPlayerCount] = useState(2);
  const [playerHands, setPlayerHands] = useState<Card[][]>([]);
  const [randomResult, setRandomResult] = useState("");

  const increasePlayers = () => {
    if (playerCount < 6) {
      setPlayerCount((prev) => prev + 1);
    }
  };

  const decreasePlayers = () => {
    if (playerCount > 2) {
      setPlayerCount((prev) => prev - 1);
    }
  };

  const dealCards = () => {
    const shuffled = shuffleDeck(deck);
    const CARDS_PER_PLAYER = 5;
    const hands: Card[][] = [];

    for (let i = 0; i < playerCount; i++) {
      const startIndex = i * CARDS_PER_PLAYER;
      const playerCards = shuffled.slice(
        startIndex,
        startIndex + CARDS_PER_PLAYER
      );
      hands.push(playerCards);
    }

    setPlayerHands(hands);
  };

  const removeCard = (playerIndex: number, cardIndex: number) => {
    setPlayerHands((prev) => {
      const newHands = [...prev];
      newHands[playerIndex] = newHands[playerIndex].filter(
        (_, i) => i !== cardIndex
      );
      return newHands;
    });
  };

  const generateRandom = () => {
    const directions = ["clockwise", "counterclockwise"];
    const steps = [1, 2];
    const layers = ["outer", "middle", "inner"];

    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    const randomSteps = steps[Math.floor(Math.random() * steps.length)];
    const randomLayer = layers[Math.floor(Math.random() * layers.length)];

    const result = `Players: ${playerCount}, Layer: ${randomLayer}, Direction: ${randomDirection}, Steps: ${randomSteps}`;
    setRandomResult(result);
  };

  const resetGame = () => {
    setPlayerCount(2);
    setPlayerHands([]);
    setRandomResult("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-8">
        <PlayerControls
          playerCount={playerCount}
          onIncrease={increasePlayers}
          onDecrease={decreasePlayers}
          onDeal={dealCards}
        />

        <RandomGenerator onGenerate={generateRandom} result={randomResult} />
        <Board />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {playerHands.map((hand, index) => (
            <PlayerHand
              key={index}
              playerIndex={index}
              cards={hand}
              onRemoveCard={(cardIndex) => removeCard(index, cardIndex)}
            />
          ))}
        </div>

        <div className="text-center mt-8 pt-5 border-t-2 border-gray-200">
          <button
            onClick={resetGame}
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
