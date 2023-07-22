import "./PlayGrid.css";

import React, { useState } from "react";

const gridSize = 10;
const fuelConso = {
  Chasseur: 1,
  Fregate: 2,
  Croiseur: 4,
  Destroyer: 8,
};
const retour = () => {
  localStorage.removeItem("token");
  navigate("/dashboard");
};

const PlayGrid = () => {
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [carburant, setCarburant] = useState(10); // Carburant initial du joueur (vous pouvez ajuster la valeur)

  // Fonction pour envoyer les vaisseaux vers la cible sélectionnée
  const sendShips = (vaisseaux) => {
    const carburantNecessaire = vaisseaux.reduce(
      (total, vaisseau) => total + fuelConso[vaisseau.type] * vaisseau.quantite,
      0
    );
    if (carburant >= carburantNecessaire) {
      // Envoi des vaisseaux ici (vous pouvez ajouter la logique de gestion des vaisseaux en campagne)
      setCarburant(carburant - carburantNecessaire);
      alert("Vaisseaux envoyés avec succès !");
    } else {
      alert(
        "Vous n'avez pas assez de carburant pour effectuer ce déplacement."
      );
    }
  };

  // Fonction pour sélectionner une cible
  const selectTarget = (target) => {
    setSelectedTarget(target);
  };

  // Fonction pour produire plus de carburant (non implémentée ici, vous pouvez le faire selon vos besoins)

  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const cellClassName =
          selectedTarget && selectedTarget.x === x && selectedTarget.y === y
            ? "cell target"
            : "cell";
        grid.push(
          <div
            key={`${x}-${y}`}
            className={cellClassName}
            onClick={() => selectTarget({ x, y })}
          >
            {x === 0 && y === 0 ? `${x},${y}` : null}
          </div>
        );
      }
    }
    return grid;
  };

  return (
    <div id="play-gird">
      <div className="d-flex flex-row-reverse">
        <button className="goback" onClick={retour}>
          RETOUR
        </button>
      </div>
      <div>
        <h1>Bataille Navale - Galaxie</h1>
        <div className="grid">{renderGrid()}</div>
        {selectedTarget && (
          <div className="controls">
            <h2>
              Cible sélectionnée : {`${selectedTarget.x},${selectedTarget.y}`}
            </h2>
            <p>Carburant disponible : {carburant}</p>
            <p>
              Carburant nécessaire pour déplacement : TODO (calculer selon les
              vaisseaux sélectionnés)
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="sendsy"
                onClick={() =>
                  sendShips(/* TODO: passer les vaisseaux sélectionnés ici */)
                }
              >
                Envoyer les vaisseaux
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayGrid;
