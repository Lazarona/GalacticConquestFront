import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Infrastructures.css";

function Infrastructures() {
  const [mines, setMines] = useState([]);
  const [powerplants, setPowerplants] = useState([]);
  const [refineries, setRefineries] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [erreurs, setErreurs] = useState({});
  const [name, setName] = useState([]);
  const [username, setUsername] = useState([]);

  const navigate = useNavigate();

  // Deconnexion User + redirection HOME
  const deconnexion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // redirection Dashboard
  const navDashboard = () => {
    navigate("/dashboard");
  };

  // recuperation du backend Mine
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

  // recuperation du backend Central
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

  // recuperation du backend Raffinerie
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

  // recuperation du backend Entrepot
  const getWarehouse = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const reqData = await fetch(
      "http://127.0.0.1:8000/api/warehouses",
      options
    );
    const resData = await reqData.json();
    console.log("Data (Warehouses) : ", resData);
    if (reqData.status == 401) {
      setErreurs(resData);
    } else {
      setWarehouse(resData.warehouses);
    }
  };

  // Affichage des ressources
  const displayMines = () => {
    return mines.map((e, index) => {
      const finished_at = new Date(e.finished_at);
      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() - 2);
      return (
        <div className="colortext" key={index}>
          <ul>
            <li>Mine n°{index + 1}</li>
            {finished_at > currentDate ? (
              <img
                className="imgMineUnfinished"
                src="src\Components\img\Mine.png"
              />
            ) : (
              <img className="imgMine" src="src\Components\img\Mine.png" />
            )}
            <p>Niveau {e.level}</p>
            <p>Production : {e.production_hour} / h</p>
          </ul>{" "}
          {finished_at > currentDate ? (
            <div>
              <button className="btndeletenone d-none" name="delete">
                Suprimer
              </button>
              <button className="btnmodifiernone d-none" name="modifier">
                Modifier
              </button>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btndelete"
                name="delete"
                onClick={() => handleDelete(e)}
              >
                Suprimer
              </button>
              <button
                type="button"
                className="btnmodifier"
                name="modifier"
                // onClick={() => handleDeleteRefineries(e)}
              >
                Modifier
              </button>
            </div>
          )}
          ------------------
        </div>
      );
    });
  };

  const handleDelete = (mine) => {
    const updatedMines = mines.filter((e) => e !== mine);
    setMines(updatedMines);
    localStorage.removeItem(mines);
  };

  const displayPowerplants = () => {
    return powerplants.map((e, index) => {
      const finished_at = new Date(e.finished_at);
      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() - 2);
      return (
        <div className="colortext" key={index}>
          <ul>
            <li>Centrale n°{index + 1}</li>
            {finished_at > currentDate ? (
              <img
                className="imgMineUnfinished"
                src="src\Components\img\Usine.png"
              />
            ) : (
              <img className="imgMine" src="src\Components\img\Usine.png" />
            )}
            <p>Niveau {e.level}</p>
            <p>Energie : 5 </p>
          </ul>{" "}
          {finished_at > currentDate ? (
            <div>
              <button className="btndeletenone d-none" name="delete">
                Suprimer
              </button>
              <button className="btnmodifiernone d-none" name="modifier">
                Modifier
              </button>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btndelete"
                name="delete"
                onClick={() => handleDeletepowerplants(e)}
              >
                Suprimer
              </button>
              <button
                type="button"
                className="btnmodifier"
                name="modifier"
                // onClick={() => handleDeleteRefineries(e)}
              >
                Modifier
              </button>
            </div>
          )}
          ------------------
        </div>
      );
    });
  };
  const handleDeletepowerplants = (powerplant) => {
    const updatedPowerplants = powerplants.filter((e) => e !== powerplant);
    setPowerplants(updatedPowerplants);
    localStorage.removeItem(powerplants);
  };

  const displayRefineries = () => {
    return refineries.map((e, index) => {
      const finished_at = new Date(e.finished_at);
      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() - 2);
      return (
        <div className="colortext" key={index}>
          <ul>
            <li>Raffinerie n°{index + 1}</li>
            {finished_at > currentDate ? (
              <img
                className="imgMineUnfinished"
                src="src\Components\img\refinery.png"
              />
            ) : (
              <img className="imgMine" src="src\Components\img\refinery.png" />
            )}
            <p>Niveau {e.level}</p>
            <p>Production : {e.production_hour} / h</p>
          </ul>{" "}
          {finished_at > currentDate ? (
            <div>
              <button className="btndeletenone d-none" name="delete">
                Suprimer
              </button>
              <button className="btnmodifiernone d-none" name="modifier">
                Modifier
              </button>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btndelete"
                name="delete"
                onClick={() => handleDeleteRefineries(e)}
              >
                Suprimer
              </button>
              <button
                type="button"
                className="btnmodifier"
                name="modifier"
                // onClick={() => handleDeleteRefineries(e)}
              >
                Modifier
              </button>
            </div>
          )}
          ------------------
        </div>
      );
    });
  };
  const handleDeleteRefineries = (refinerie) => {
    const updatedRefineries = refineries.filter((e) => e !== refinerie);
    setRefineries(updatedRefineries);
    localStorage.removeItem(refineries);
  };

  const displayWarehouse = () => {
    return warehouse.map((e, index) => {
      const finished_at = new Date(e.finished_at);
      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() - 2);
      return (
        <div className="colortext" key={index}>
          <ul className="colortext">
            <li>Entrepot n°{index + 1}</li>
            {finished_at > currentDate ? (
              <img
                className="imgMineUnfinished"
                src="src\Components\img\entrepot.png"
              />
            ) : (
              <img className="imgMine" src="src\Components\img\entrepot.png" />
            )}
            <p>Niveau {e.level}</p>
            <p>Capacité : {e.capacity}</p>
          </ul>
          ------------------
        </div>
      );
    });
  };
  //  ------------------------------Fin affichage R--------------------------------------

  // Affichage Erreurs
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
  // Recupere + affichage du nom de la planete

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

  // Recupere + affichage du nom du username

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
    getMines();
    getPowerplants();
    getRefineries();
    getWarehouse();
    planetName();
    identifiant();
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

  useEffect(() => {
    console.log("Warehouses : ", warehouse);
  }, [warehouse, setWarehouse]);

  useEffect(() => {
    console.log("Planet : ", name);
  }, [setName, name]);

  useEffect(() => {
    console.log("Username : ", username);
  }, [setUsername, username]);
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
        <div id="infrastructure">
          <div id="infrastructure-container">
            <div className=" d-flex justify-content-between align-items-center">
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

              <h2>MES INFRASTRUCTURES</h2>
              <img
                className="return  ms-3"
                src="src/Components/img/flecheRetour.png"
                alt=""
                onClick={navDashboard}
              />
            </div>
          </div>

          {/* ---------BODY------ */}
          <div className="d-flex justify-content-center gap-5 allcont">
            <div className="card containerinfra">
              <h5 className="card-header  cardheader d-flex justify-content-center">
                MINE
              </h5>
              <div className="card-body cardbody">
                <div className="card-title">{displayMines()}</div>
                {/* <p className="card-text"> key={index}</p> */}

                {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
              </div>
            </div>
            <div className="card containerinfra">
              <h5 className="card-header cardheader d-flex justify-content-center">
                CENTRALE
              </h5>
              <div className="card-body cardbody">
                <div className="card-title">{displayPowerplants()}</div>
                {/* <p className="card-text"></p> */}
                {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
              </div>
            </div>
            <div className="card containerinfra">
              <h5 className="card-header cardheader d-flex justify-content-center">
                RAFFINERIE
              </h5>
              <div className="card-body cardbody">
                <div className="card-title">{displayRefineries()}</div>
                {/* <p className="card-text"></p> */}
                {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
              </div>
            </div>
            <div className="card containerinfra">
              <h5 className="card-header cardheader d-flex justify-content-center">
                ENTREPOT
              </h5>
              <div className="card-body cardbody">
                <div className="card-title">{displayWarehouse()}</div>
                {/* <p className="card-text"> key={index}</p> */}

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
