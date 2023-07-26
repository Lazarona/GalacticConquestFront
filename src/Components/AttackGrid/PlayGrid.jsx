import { useNavigate } from "react-router-dom";
import "./PlayGrid.css";
import React, { useState } from "react";

const PlayGrid = () => {
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [position, setPosition] = useState(null);
  const [battle, setBattle] = useState(null);
  const [user, setUser] = useState(null);
  const [fuel, setFuel] = useState(null);
  const gridSize = 50;

  const navigate = useNavigate;

  const dashboard = () => {
    navigate("/dashboard");
  };

  // Fonction pour sélectionner une cible
  const selectTarget = (target) => {
    setSelectedTarget(target);
  };

  const getPosition = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch("http://127.0.0.1:8000/api/position", options);
    const data = await response.json();
    console.log("Reponse de l'API (Position): ", data);
    setPosition(data);
  };

  const getUser = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch("http://127.0.0.1:8000/api/user", options);
    const data = await response.json();
    console.log("Reponse de l'API (UserId): ", data);
    setUser(data);
  };

  const getBattle = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      "http://127.0.0.1:8000/api/attack/{defenderId}",
      options
    );
    const data = await response.json();
    console.log("Reponse de l'API (Battle): ", data);
    setBattle(data);
  };

  const getFuel = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch("http://127.0.0.1:8000/api/resource", options);
    const data = await response.json();
    console.log("Reponse de l'API (Fuel): ", data);
    setFuel(data);
  };

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
      <h1 className="bataille-title">Bataille Spatiale - Galaxie</h1>

      <div className="col-sm-6">
        <div className="cardattack2">
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
      <div className="row">
        <div className="col-sm-6">
          <div className="cardattack">
            <div className="card-body">
              <h5 id="card-title">Historique de combat</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident placeat numquam expedita enim veniam, fugiat
                laudantium dolores odio iure, reiciendis quas qui quis facere
                obcaecati aliquid doloribus autem odit excepturi!
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="d-flex justify-content-center">
          <button className="sendsy" onClick={() => sendShips()}>
            Envoyer les vaisseaux
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PlayGrid;
