import "./Battle.css";
import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function Battle() {
  const [positions, setPositions] = useState(null);
  const [battle, setBattle] = useState(null);
  const [historic, setHistoric] = useState(null);
  const [erreurs, setErreurs] = useState(null);
  const [userID, setUserID] = useState(null);
  const [showCoordinates, setShowCoordinates] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState(null);

  const navigate = useNavigate();

  const navDashboard = () => {
    navigate("/dashboard");
  };

  const deconnexion = () => {
    localStorage.removeItem("token");
    navigate("/");
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

  function displayOpponents() {
    if (positions && userID) {
      return (
        <ul>
          {positions.map((e) => {
            if (e.user_id === userID[0].id) {
              return null;
            } else {
              return (
                <li className="liAdversaire" key={e.id}>
                  Planète : {e.name} Position :{e.position_x} x {e.position_y}{" "}
                  <button
                    className="btnBattle"
                    onClick={() => getBattle(e.user_id)}
                  >
                    Attack
                  </button>
                </li>
              );
            }
          })}
        </ul>
      );
    } else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  }

  const getBattle = async (userID) => {
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

  const displayHistoricBattle = () => {
    if (historic) {
      if (historic.length == 0) {
        return (
          <div className="historicBattle">
            <p>Your opponent didn't have an army</p>
            <p>Minerais gagnés : {battle.gainedOre}</p>
            <p>Fuel gagné : {battle.gainedFuel}</p>
            <p>Gagnant : {battle.overall_winner}</p>
          </div>
        );
      } else {
        return (
          <div className="historicBattle">
            {battle.gainedOre == null ? (
              <>
                <h2>You lost</h2>
                {historic.map((e, key) => {
                  return (
                    <div key={key}>
                      <p>Round : {e.round}</p>
                      <p>Winner du round : {e.winner}</p>
                      <p>Vaisseaux détruits :</p>
                      <ul>
                        {Object.keys(e.destroyed_ships).map((shipType, key) => {
                          return (
                            <li key={key}>
                              {shipType}: {e.destroyed_ships[shipType]}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
                ;
              </>
            ) : (
              <>
                <p>Minerais gagnés : {battle.gainedOre}</p>
                <p>Fuel gagné : {battle.gainedFuel}</p>
                <p>Gagnant : {battle.overall_winner}</p>
                {historic.map((e, key) => {
                  return (
                    <div key={key}>
                      <p>Round : {e.round}</p>
                      <p>Winner du round : {e.winner}</p>
                      <p>Vaisseaux attaquants : {e.attacker_ships}</p>
                      <p>Vaisseaux défenseurs : {e.defender_ships}</p>
                    </div>
                  );
                })}
                ;
              </>
            )}
          </div>
        );
      }
    } else {
      return (
        <div>
          <div className="battle-wait">
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
        if (erreurs.fuelConsumed == undefined) {
          return <p className="errorText">{erreurs.message}</p>;
        } else {
          return (
            <p className="errorText">
              {erreurs.message} You need {erreurs.fuelConsumed} fuel to travel{" "}
              {erreurs.distance} light years.
            </p>
          );
        }
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

  const identifiant = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch("http://127.0.0.1:8000/api/user", options);
    const donnees = await response.json();
    console.log("Reponse de l'API (username): ", donnees);
    setUserID(donnees.user);
  };

  useEffect(() => {
    getPositions();
    identifiant();
  }, []);

  useEffect(() => {
    console.log("Positions : ", positions);
  }, [positions, setPositions]);

  //////////////// POSITION
  const handleImageClick = (event) => {
    const imageRect = event.target.getBoundingClientRect();
    const x = event.clientX - imageRect.left;
    const y = event.clientY - imageRect.top;

    if (x >= 0 && x <= 999 && y >= 0 && y <= 999) {
      // Afficher les coordonnées uniquement si elles sont dans les limites de l'image
      setClickCoordinates({ x, y });
      setShowCoordinates(true);

      setTimeout(() => {
        setShowCoordinates(false);
      }, 3000); //3secondes
    } else {
      setShowCoordinates(false);
    }
  };

  return (
    <>
      <div id="fond-battle">
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
          <div>
            <div className="d-flex flex-row-reverse">
              <img
                className="returnptodash"
                src="src/Components/img/flecheRetour.png"
                alt=""
                onClick={navDashboard}
              />
            </div>
            <div>{displayOpponents()}</div>
            <div>{displayErrors()}</div>
            <div>{displayHistoricBattle()}</div>
          </div>
        )}
        <img
          src="src\Components\img\GBattle.jpg"
          class="img-fluid"
          alt="Responsive image"
          onClick={handleImageClick}
        />
        {/* Afficher les coordonnées à côté de la souris */}
        {showCoordinates && (
          <div
            style={{
              position: "fixed",
              top: clickCoordinates.y,
              left: clickCoordinates.x + 10, // Décalage pour éviter le chevauchement avec la souris
              backgroundColor: "white",
              padding: "5px",
              border: "1px solid black",
            }}
          >
            Coordonnées X: {clickCoordinates.x}, Coordonnées Y:{" "}
            {clickCoordinates.y}
          </div>
        )}
      </div>
    </>
  );
}
