import { useNavigate } from "react-router-dom";
import "./Ranking.css";
import React, { useEffect, useState } from "react";

export default function Ranking() {
  const [ranking, setRanking] = useState(null);
  const [name, setName] = useState([]);
  const [username, setUsername] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getRanking = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const response = await fetch(
        "http://127.0.0.1:8000/api/rankings",
        options
      );
      const donnees = await response.json();
      console.log("Reponse de l'API (getRanking): ", donnees);
      setRanking(donnees);
    };
    getRanking();
  }, []);

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

  function navDashboard() {
    navigate("/dashboard");
  }

  const displayErrors = () => {
    if (erreurs.errors == undefined && erreurs.message == undefined) {
      return null;
    }
    if (erreurs.message != undefined) {
      return <p>{erreurs.message}</p>;
    } else {
      return Object.keys(erreurs).map((key) => {
        return (
          <ul key={key}>
            <p>{erreurs.errors.name}</p>
          </ul>
        );
      });
    }
  };

  function displayRanking() {
    if (ranking) {
      return (
        <ol>
          {ranking.map((e, key) => {
            if (key == 0) {
              return (
                <h1 key={key}>
                  <li>
                    🥇 {e.username} 🏆 : {e.victories}
                  </li>
                </h1>
              );
            }
            if (key == 1) {
              return (
                <h2 key={key}>
                  <li>
                    🥈 {e.username} 🏆 : {e.victories}
                  </li>
                </h2>
              );
            }
            if (key == 2) {
              return (
                <h4 key={key}>
                  <li>
                    🥉 {e.username} 🏆 : {e.victories}
                  </li>
                </h4>
              );
            } else {
              return (
                <li key={key}>
                  {e.username} 🏆 : {e.victories}
                </li>
              );
            }
          })}
        </ol>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
  // Affichage du nom de la planete

  const planetName = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch("http://127.0.0.1:8000/api/planet", options);
    const donnees = await response.json();
    console.log("Reponse de l'API (Planet): ", donnees);
    setName(donnees.planet);
  };

  const displayPlanet = () => {
    return name.map((e, index) => {
      return (
        <div key={index}>
          <p className="nameplanet">{e.name}</p>
        </div>
      );
    });
  };

  // Affichage du nom du username

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
    setUsername(donnees.user);
  };

  const displayUsername = () => {
    return username.map((e, index) => {
      return (
        <div key={index}>
          <p className="username ">{e.username}</p>
        </div>
      );
    });
  };
  useEffect(() => {
    planetName();
    identifiant();
  }, []);
  useEffect(() => {
    console.log("Planet : ", name);
  }, [setName, name]);

  useEffect(() => {
    console.log("Username : ", username);
  }, [setUsername, username]);

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
        <div id="rangking">
          <div id="cs-container">
            <div className=" d-flex justify-content-between align-items-center mb-5">
              <img
                className="logonav ms-3 "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
                src="src/Components/img/nvb.png"
                alt=""
              />

              <div
                className="offcanvas offcanvas-start w-25 p-3 navbarmenu"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasScrollingLabel"
                  ></h5>
                  <button
                    type="button"
                    className="boutonclose btn-close "
                    data-bs-dismiss="offcanvas"
                    aria-label="FERMER"
                  ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column mb-3 gap-3">
                  <div className="contenuusername d-flex align-items-center ">
                    <img
                      className="logousername"
                      src="src/Components/img/logousername.png"
                      alt=""
                    />
                    {displayUsername()}
                    <div className="d-flex align-items-baseline gap-2  ">
                      <img
                        className="imgplanetusername"
                        src="src/Components/img/planet1.png"
                        alt=""
                      />
                      {displayPlanet()}
                    </div>
                  </div>
                  <a className="boutonm pt-3">ACHAT</a>
                  <a className="boutondec" onClick={deconnexion}>
                    DECONNEXION
                  </a>
                </div>
              </div>

              <img
                className="return me-1"
                src="src/Components/img/flecheRetour.png"
                alt=""
                onClick={navDashboard}
              />
            </div>
          </div>
          <div className=" d-flex justify-content-center ">
            <div className="card text-center mt-3">
              <div className="card-header titlecarte">
                <h1>Classement Galactique</h1>
              </div>
              <div className="card-body">
                <div className="card-text">{displayRanking()}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
