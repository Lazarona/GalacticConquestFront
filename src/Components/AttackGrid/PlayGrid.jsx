import "./AttackGrid.css";
import React, { useState } from "react";

const gridSize = 5; // Taille de la grille
const initialPosition = { x: 1, y: 1 }; // Position initiale du pion

function PlayGrid() {
  const [position, setPosition] = useState(initialPosition);

  const handleMove = (direction) => {
    setPosition((prevPosition) => {
      let newPosition = { ...prevPosition };
      switch (direction) {
        case "up":
          newPosition.y = Math.max(newPosition.y - 1, 1);
          break;
        case "down":
          newPosition.y = Math.min(newPosition.y + 1, gridSize);
          break;
        case "left":
          newPosition.x = Math.max(newPosition.x - 1, 1);
          break;
        case "right":
          newPosition.x = Math.min(newPosition.x + 1, gridSize);
          break;
        default:
          break;
      }
      return newPosition;
    });
  };

  const renderCells = () => {
    const cells = [];
    for (let y = 1; y <= gridSize; y++) {
      for (let x = 1; x <= gridSize; x++) {
        const cellClassName =
          x === position.x && y === position.y ? "cell pion" : "cell";
        cells.push(<div key={`${x}-${y}`} className={cellClassName} />);
      }
    }
    return cells;
  };

  return (
    <div className="grid">
      {renderCells()}
      <div className="controls">
        <button onClick={() => handleMove("up")}>Up</button>
        <button onClick={() => handleMove("down")}>Down</button>
        <button onClick={() => handleMove("left")}>Left</button>
        <button onClick={() => handleMove("right")}>Right</button>
      </div>
    </div>
  );
}

export default PlayGrid;
