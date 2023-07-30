import { useNavigate } from "react-router-dom";
import "./Ranking.css";
import React, { useEffect, useState } from "react";

export default function Ranking() {
  const [ranking, setRanking] = useState(null);

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
    localStorage.removeItem("token");
    navigate("/");
  };

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
          <div className="d-flex flex-row-reverse">
            <img
              className="returnptodash"
              src="src/Components/img/flecheRetour.png"
              alt=""
              onClick={navDashboard}
            />
          </div>
          <div className="card text-center">
            <div className="card-header">
              <h1>Classement Galactique</h1>
            </div>
            <div className="card-body">
              <div className="card-text">{displayRanking()}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
