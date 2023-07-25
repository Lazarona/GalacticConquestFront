import "./PlayGrid.css";
import React, { useState } from "react";

// const construction = async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };
//   const response = await fetch("http://127.0.0.1:8000/api/position", options);
//   const data = await response.json();
//   console.log("Reponse de l'API : ", data);
//   setReponse(data);
// };

//onnées reçues luent grâce à JSON

const PlayGrid = () => {
  const dashboard = () => {
    navigate("/dashboard");
  };

  const gridSize = 10;
  const [selectedTarget, setSelectedTarget] = useState(null);

  // Fonction pour sélectionner une cible
  const selectTarget = (target) => {
    setSelectedTarget(target);
  };

  // // Fonction pour produire plus de carburant (non implémentée ici, vous pouvez le faire selon vos besoins)

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
        <img
          className="returnptodash"
          src="src/Components/img/flecheRetour.png"
          alt=""
          onClick={dashboard}
        />
      </div>
      <h1>Bataille Spatiale - Galaxie</h1>

      <div className="row">
        <div className="col-sm-6">
          <div> </div>

          <div className="card-histo-attac" class="">
            <div className="card-body">
              <h5 className="card-title">Historique de combat</h5>
              <p className="card-text">
                TEST d'apparition d'historique de combat
              </p>
              <a href="#" className="btn btn-primary">
                Masquer l'Historique
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-attack">
            <div className="card-body">
              <h5 className="card-title">Combat</h5>
              <p className="card-text">
                <div>
                  <div className="grid">{renderGrid()}</div>
                  {selectedTarget && (
                    <div className="controls">
                      <h2>
                        Cible sélectionnée :{" "}
                        {`${selectedTarget.x},${selectedTarget.y}`}
                      </h2>
                      <p>Carburant disponible : en test</p>
                      <p></p>
                    </div>
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="sendsy" onClick={() => sendShips()}>
          Envoyer les vaisseaux
        </button>
      </div>
    </div>
  );
};

export default PlayGrid;
