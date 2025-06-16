export const deck = [
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
];

let currentPlayers = 2;
let shuffledDeck = [];
let playerHands = [];

const godEmojis = {
  terra: "🌳",
  agua: "🌊",
  sol: "🌞",
  morte: "🦂",
};

const directionEmojis = {
  clockwise: "↻",
  "counter-clockwise": "↺",
};

function shuffleDeck() {
  shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
}

function increasePlayers() {
  if (currentPlayers < 6) {
    currentPlayers++;
    updatePlayerCount();
  }
}

function decreasePlayers() {
  if (currentPlayers > 2) {
    currentPlayers--;
    updatePlayerCount();
  }
}

function updatePlayerCount() {
  document.getElementById("playerCount").textContent = currentPlayers;
}

function generateRandom() {
  const directions = ["clockwise", "counterclockwise"];
  const steps = [1, 2];
  const layers = ["outer", "middle", "inner"];

  const randomDirection =
    directions[Math.floor(Math.random() * directions.length)];
  const randomSteps = steps[Math.floor(Math.random() * steps.length)];
  const randomLayer = layers[Math.floor(Math.random() * layers.length)];

  const result = `Players: ${currentPlayers}, Layer: ${randomLayer}, Direction: ${randomDirection}, Steps: ${randomSteps}`;
  document.getElementById("result").textContent = result;
}

function removeCard(playerIndex, cardIndex) {
  const card = playerHands[playerIndex][cardIndex];
  playerHands[playerIndex].splice(cardIndex, 1);
  updatePlayerHands();
}

function updatePlayerHands() {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  playerHands.forEach((playerCards, playerIndex) => {
    const playerList = document.createElement("div");
    playerList.className = "player-cards";

    const playerTitle = document.createElement("div");
    playerTitle.className = "player-title";
    playerTitle.textContent = `Player ${playerIndex + 1}'s Cards:`;
    playerList.appendChild(playerTitle);

    const handContainer = document.createElement("ul");
    handContainer.className = "player-hand-container";
    playerList.appendChild(handContainer);

    playerCards.forEach((card, cardIndex) => {
      const li = document.createElement("li");
      li.className = "player-card";
      const button = document.createElement("button");
      button.className = `card-button ${card.god}`;
      button.onclick = () => removeCard(playerIndex, cardIndex);

      const cardInfo = document.createElement("div");
      cardInfo.className = "card-info";

      const godSpan = document.createElement("span");
      godSpan.className = "card-god";
      godSpan.textContent = `${godEmojis[card.god]}`;

      const detailsSpan = document.createElement("span");
      detailsSpan.className = "card-details";
      detailsSpan.innerHTML = `<strong>${card.turns}</strong>${
        directionEmojis[card.direction]
      } `;

      cardInfo.appendChild(godSpan);
      cardInfo.appendChild(detailsSpan);
      button.appendChild(cardInfo);
      li.appendChild(button);
      handContainer.appendChild(li);
    });

    cardsContainer.appendChild(playerList);
  });
}

function dealCards() {
  shuffleDeck();
  const CARDS_PER_PLAYER = 5;
  playerHands = [];

  for (let i = 0; i < currentPlayers; i++) {
    const playerCards = shuffledDeck.slice(
      i * CARDS_PER_PLAYER,
      (i + 1) * CARDS_PER_PLAYER
    );
    playerHands.push(playerCards);
  }

  updatePlayerHands();
}

function resetGame() {
  currentPlayers = 2;
  playerHands = [];
  updatePlayerCount();
  document.getElementById("cardsContainer").innerHTML = "";
  document.getElementById("result").textContent = "";
}

// Make functions available globally
window.increasePlayers = increasePlayers;
window.decreasePlayers = decreasePlayers;
window.generateRandom = generateRandom;
window.dealCards = dealCards;
window.resetGame = resetGame;
