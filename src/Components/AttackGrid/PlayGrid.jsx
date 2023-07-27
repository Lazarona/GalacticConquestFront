import { useNavigate } from "react-router-dom";
import "./PlayGrid.css";
import React, { useEffect, useState } from "react";

const PlayGrid = () => {
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [positions, setPositions] = useState(null);
  const [battle, setBattle] = useState(null);
  const [userX, setUserX] = useState(null);
  const [userY, setUserY] = useState(null);
  const [historic, setHistoric] = useState(null);
  const [erreurs, setErreurs] = useState(null);
  const [showSelectedText, setShowSelectedText] = useState(false);

  const gridSize = 50;

  const positionsArray = Object.values(positions || {}).map((planet) => ({
    x: planet.position_x,
    y: planet.position_y,
    user_id: planet.user_id,
    ...planet,
  }));

  const navigate = useNavigate();

  const navDashboard = () => {
    navigate("/dashboard");
  };

  const deconnexion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const selectDestination = (target) => {
    setSelectedTarget(target);
  };

  // Fonction pour sélectionner une cible
  const selectTarget = (target) => {
    setSelectedTarget(target);
    getBattle();
  };

  const getPositions = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      "http://127.0.0.1:8000/api/positions",
      options
    );
    const data = await response.json();
    console.log("Reponse de l'API (Positions): ", data);
    setPositions(data.planets);
  };

  const getBattle = async () => {
    const defenderID = positionsArray.find((planet) => planet.user_id);
    const userID = defenderID.user_id;
    console.log("Defender ID :", defenderID);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/attack/${userID}`,
      options
    );
    const data = await response.json();

    if (response.status == 201) {
      console.log("Reponse de l'API (Battle): ", data);
      setBattle(data);
      console.log("Reponse de l'API (Historic): ", data.battle_log);
      setHistoric(data.battle_log);
    } else {
      setErreurs(data);
    }
  };

  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const cellClassName =
          selectedTarget && selectedTarget.x === x && selectedTarget.y === y
            ? "cell target"
            : "cell";

        const planet = positionsArray.find(
          (planet) => planet.x === x && planet.y === y
        );
        if (planet) {
          grid.push(
            <div
              key={`${x}-${y}`}
              className="cellUser"
              onClick={() => selectTarget({ x, y })}
            >
              {x === 0 && y === 0 ? `${x},${y}` : null}
            </div>
          );
        } else {
          grid.push(
            <div
              key={`${x}-${y}`}
              className={cellClassName}
              onClick={() => selectDestination({ x, y })}
            >
              {x === 0 && y === 0 ? `${x},${y}` : null}
            </div>
          );
        }
      }
    }
    return grid;
  };

  const displayHistoricBattle = () => {
    if (historic) {
      return historic.map((key, e) => {
        return (
          <div key={key}>
            <p>{e.round}</p>
            <p>{e.winner}</p>
            <p>{e.attacker_ships}</p>
            <p>{e.defender_ships}</p>
          </div>
        );
      });
    } else {
      return (
        <div>
          <div className="waitvert">
            <div className="blinking-text">Waiting for battle...</div>
          </div>
        </div>
      );
    }
  };

  const displayErrors = () => {
    if (erreurs) {
      if (erreurs.errors == undefined && erreurs.message == undefined) {
        return null;
      }
      if (erreurs.message != undefined) {
        return Object.keys(erreurs).map((key) => {
          return (
            <ul key={key}>
              <p>{erreurs.message}</p>
            </ul>
          );
        });
      } else {
        return Object.keys(erreurs).map((key) => {
          return (
            <ul key={key}>
              <h1>{erreurs.errors.name}</h1>
            </ul>
          );
        });
      }
    }

    return null;
  };

  useEffect(() => {
    getPositions();
    console.log(
      "defender ID : ",
      positionsArray.find((planet) => planet.id)
    );
  }, []);

  useEffect(() => {
    console.log("Positions : ", positionsArray);
  }, [positions, setPositions]);

  useEffect(() => {
    setShowSelectedText(false); // Réinitialise le texte sélectionné
  }, [selectedTarget]);

  useEffect(() => {
    if (selectedTarget) {
      // Si une cible est sélectionnée, affiche le texte "Cible sélectionnée" lettre par lettre
      setShowSelectedText(true);
    }
  }, [selectedTarget]);

  return (
    <>
      {localStorage.getItem("token") === null ? (
        <div id="dashboard">
          <div className="d-flex justify-content-center titleinfra2">
            {displayErrors()}
          </div>
          <div className="d-flex justify-content-center titleinfra2">
            <button className="myinfra" onClick={deconnexion}>
              Revenir à l'accueil
            </button>
          </div>
        </div>
      ) : (
        <div id="play-gird">
          <div className="d-flex flex-row-reverse">
            <img
              className="returnptodash"
              src="src/Components/img/flecheRetour.png"
              alt=""
              onClick={navDashboard}
            />
          </div>
          <h1 className="bataille-title">Bataille Spatiale - Galaxie</h1>

          <div className="row">
            <div className="col-sm-6">
              {" "}
              <div className="cardattack2">
                <h5 className="card-title">Combat</h5>
                <div className="card-text">
                  <div>
                    <div className="grid">{renderGrid()}</div>
                    {selectedTarget && (
                      <div className="controls">
                        <p>
                          {showSelectedText ? (
                            <TextAppearing text="Cible sélectionnée : " />
                          ) : (
                            "Cible sélectionnée : "
                          )}
                          {selectedTarget &&
                            `${selectedTarget.x},${selectedTarget.y}`}
                        </p>
                        {/* <p>{displayErrors()}</p> */}
                        <p></p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              {" "}
              <div className="cardattack">
                <div className="card-body">
                  <div className="card-text">{displayErrors()}</div>
                  <h5 id="card-title">Historique de combat</h5>
                  <div className="card-text">{displayHistoricBattle()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const TextAppearing = ({ text }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setVisibleText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Vous pouvez ajuster la vitesse d'apparition des lettres en modifiant cette valeur

    return () => clearInterval(interval);
  }, [text]);

  return <span>{visibleText}</span>;
};

export default PlayGrid;
