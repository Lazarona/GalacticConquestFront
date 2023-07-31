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
  const [clickCoordo, setClickCoordo] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();

  const navDashboard = () => {
    navigate("/dashboard");
  };

  const deconnexion = () => {
    backDisconnect();
    localStorage.removeItem("token");
    navigate("/");
  };

  async function backDisconnect() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch("http://127.0.0.1:8000/api/logout", options);
    const donnees = await response.json();
    console.log("Reponse de l'API (Logout) : ", donnees);
  }

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
                <li className="positionAdv" key={e.id}>
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
                <div
                  id="cursorTarget"
                  style={{
                    backgroundColor:
                      battle.gainedOre === null ? "red" : "initial",
                  }}
                  //passe au rouge si perdu
                />
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
          return <p className="messErreurB">{erreurs.message}</p>;
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
    //La méthode Element.getBoundingClientRect()
    //retourne un objet DOMRect fournissant des informations sur la taille
    const x = event.clientX - imageRect.left;
    const y = event.clientY - imageRect.top;
    setClickCoordo({ x, y });
  };

  return (
    <>
      <div id="fond-battle">
        <div>
          <h1 className="titleB">Bataille intergalactique</h1>
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
              <p className="affichPosi">
                <p>
                  Position x:{clickCoordo.x}, Position y:{clickCoordo.y}
                </p>
              </p>
              <div class="col-4">
                <div className="retroHistory">{displayHistoricBattle()}</div>
              </div>
            </div>
          )}{" "}
          <div class="row justify-content-around custom-line">
            <div class="col-4"></div>
            <div className="cursorTarget" onClick={handleImageClick}>
              {" "}
              <img
                src="src\Components\img\vieoConquetGa.gif"
                class="rounded mx-auto d-block"
                alt="..."
                onMouseMove={handleImageClick}
                width="1000"
                height="1000"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
