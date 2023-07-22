import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Infrastructures.css";

function Infrastructures() {
  const [mines, setMines] = useState([]);
  const [powerplants, setPowerplants] = useState([]);
  const [refineries, setRefineries] = useState([]);
  const [erreurs, setErreurs] = useState({});

  const navigate = useNavigate();

  const deconnexion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navHome = () => {
    navigate("/");
  };
  const navDashboard = () => {
    navigate("/dashboard");
  };

  const getMines = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const reqData = await fetch("http://127.0.0.1:8000/api/mines", options);
    const resData = await reqData.json();
    console.log("Data (Mines) : ", resData);
    if (reqData.status == 401) {
      setErreurs(resData);
    } else {
      setMines(resData.mines);
    }
  };

  const getPowerplants = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const reqData = await fetch(
      "http://127.0.0.1:8000/api/powerplants",
      options
    );
    const resData = await reqData.json();
    console.log("Data (Powerplants): ", resData);
    setPowerplants(resData.powerPlants);
  };

  const getRefineries = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const reqData = await fetch(
      "http://127.0.0.1:8000/api/refineries",
      options
    );
    const resData = await reqData.json();
    console.log("Data (Refineries): ", resData);
    setRefineries(resData.refineries);
  };

  const displayMines = () => {
    return mines.map((e, index) => {
      return (
        <div key={index}>
          <ul>
            <li>Mine n°{index + 1}</li>
            <img className="imgMine" src="src\Components\img\Mine.png" />
            <p>Niveau {e.level}</p>
            <p>Production : {e.production_hour} / h</p>
          </ul>
        </div>
      );
    });
  };

  const displayPowerplants = () => {
    return powerplants.map((e, index) => {
      return (
        <div key={index}>
          <ul>
            <li>Centrale n°{index + 1}</li>
            <img className="imgMine" src="src\Components\img\Usine.png" />
            <p>Niveau {e.level}</p>
            <p>Energie : 5 </p>
          </ul>
        </div>
      );
    });
  };

  const displayRefineries = () => {
    return refineries.map((e, index) => {
      return (
        <div key={index}>
          <ul>
            <li>Raffinerie n°{index + 1}</li>
            <img className="imgMine" src="src\Components\img\refinery.png" />
            <p>Niveau {e.level}</p>
            <p>Production : {e.production_hour} / h</p>
          </ul>
        </div>
      );
    });
  };

  const displayErrors = () => {
    if (erreurs.errors == undefined && erreurs.message == undefined) {
      return null;
    }
    if (erreurs.message != undefined) {
      return Object.keys(erreurs).map((key) => {
        return (
          <ul key={key}>
            <h1>{erreurs.message}</h1>
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
  };

  useEffect(() => {
    getMines();
    getPowerplants();
    getRefineries();
  }, []);

  useEffect(() => {
    console.log("Mines : ", mines);
  }, [mines, setMines]);

  useEffect(() => {
    console.log("PowerPlants : ", powerplants);
  }, [powerplants, setPowerplants]);

  useEffect(() => {
    console.log("Refineries : ", refineries);
  }, [refineries, setRefineries]);
  // function updateTimer() {
  //   let targetDate = new Date("<?php echo $element['auction_end']; ?>");
  //   let currentDate = new Date();
  //   let remainingTime = targetDate.getTime() - currentDate.getTime();
  //   let hours = Math.floor(remainingTime / (1000 * 60 * 60));
  //   let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  //   let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  //   // Formatage des valeurs en chaîne de caractères avec zéro en préfixe si nécessaire
  //   let formattedHours = String(hours).padStart(2, "0");
  //   let formattedMinutes = String(minutes).padStart(2, "0");
  //   let formattedSeconds = String(seconds).padStart(2, "0");
  //   // Mettez à jour l'affichage du compte à rebours dans l'élément avec l'ID "timer"
  //   const timerElement = document.getElementById("timer");
  //   if (timerElement) {
  //     timerElement.innerHTML = `Temps restant : ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  //     const temp_construction_total = null;
  //   }
  // }
  return (
    <>
      {localStorage.getItem("token") === null ? (
        <div id="infrastructure-container">
          <div className="d-flex justify-content-center titleinfra2">
            {displayErrors()}
          </div>
          <div className="d-flex justify-content-center titleinfra2">
            <button onClick={deconnexion}>Revenir à l'accueil</button>
          </div>
        </div>
      ) : (
        <div id="infrastructure-container">
          <div className="navbar d-flex ">
            <img
              className="logonav mt-2 ms-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
              src="src/Components/img/nvb.png"
              alt=""
            />
            <div
              className="offcanvas offcanvas-start navbarmenu"
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
                <a className="boutonm">PROFIL</a>
                <a className="boutonm">ACHAT</a>
                <a className="boutondec" onClick={navHome}>
                  DECONNEXION
                </a>
              </div>
            </div>

            <h2>MES INFRASTRUCTURES</h2>
            <img
              className="return me-3"
              src="src/Components/img/flecheRetour.png"
              alt=""
              onClick={navDashboard}
            />
          </div>

          {/* ---------BODY------ */}
          <div className="d-flex justify-content-center gap-4 mt-5">
            <div className="card">
              <h5 className="card-header d-flex justify-content-center">
                MINE
              </h5>
              <div className="card-body">
                <div className="card-title">{displayMines()}</div>
                {/* <p className="card-text"> key={index}</p> */}

                {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
              </div>
            </div>
            <div className="card">
              <h5 className="card-header d-flex justify-content-center">
                CENTRALE
              </h5>
              <div className="card-body">
                <div className="card-title">{displayPowerplants()}</div>
                {/* <p className="card-text"></p> */}
                {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
              </div>
            </div>
            <div className="card">
              <h5 className="card-header d-flex justify-content-center">
                RAFFINERIE
              </h5>
              <div className="card-body">
                <div className="card-title">{displayRefineries()}</div>
                {/* <p className="card-text"></p> */}
                {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Infrastructures;
