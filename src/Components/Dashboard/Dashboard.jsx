import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from "mdb-react-ui-kit";
import { AuthContext } from "../../app/App";

function Dashboard() {
  const [userLogged, setUserLogged] = useContext(AuthContext);
  const [reponse, setReponse] = useState([]);
  const [createdInfra, setCreatedInfra] = useState([]);
  const [createdShipyard, setCreatedShipyard] = useState([]);
  const [erreurs, setErreurs] = useState({});
  const [name, setName] = useState([]);
  const [username, setUsername] = useState([]);

  const navigate = useNavigate();

  const deconnexion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navInfra = () => {
    navigate("/infrastructures");
  };

  const navShipyard = () => {
    navigate("/chantierspatial");
  };

  const getResources = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch("http://127.0.0.1:8000/api/resource", options);
    const donnees = await response.json();
    console.log("Reponse de l'API (Resources) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setReponse(donnees.resource);
    }
  };

  const displayErrors = () => {
    if (erreurs.errors == undefined && erreurs.message == undefined) {
      return null;
    }
    if (erreurs.message != undefined) {
      return Object.keys(erreurs).map((key) => {
        return (
          <ul key={key}>
            <h4>{erreurs.message}</h4>
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

  const displayOres = () => {
    if (reponse == undefined) {
      return null;
    } else {
      return Object.keys(reponse).map((key) => {
        return (
          <div key={key}>
            <>{reponse[0].ore}</>
          </div>
        );
      });
    }
  };

  const displayFuel = () => {
    if (reponse == undefined) {
      return null;
    } else {
      return Object.keys(reponse).map((key) => {
        return (
          <div key={key}>
            <>{reponse[0].fuel}</>
          </div>
        );
      });
    }
  };

  const displayEnergy = () => {
    if (reponse == undefined) {
      return null;
    } else {
      return Object.keys(reponse).map((key) => {
        return (
          <div key={key}>
            <>{reponse[0].energy}</>
          </div>
        );
      });
    }
  };

  const createMine = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type: "mine",
      }),
    };
    const response = await fetch(
      "http://127.0.0.1:8000/api/create/mine",
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (createMine) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setCreatedInfra(donnees);
    }
  };

  const createRefinery = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type: "refinery",
      }),
    };
    const response = await fetch(
      "http://127.0.0.1:8000/api/create/refinery",
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (createRefinery) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setCreatedInfra(donnees);
    }
  };

  const createPowerplant = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      "http://127.0.0.1:8000/api/create/powerplant",
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (createPowerplant) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setCreatedInfra(donnees);
    }
  };

  const createWarehouse = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      "http://127.0.0.1:8000/api/create/warehouse",
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (createWarehouse) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setCreatedInfra(donnees);
    }
  };

  const createShipyard = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      "http://127.0.0.1:8000/api/create/shipyard",
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (createShipyard) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setCreatedShipyard(donnees);
    }
  };

  const displayCreatedInfra = () => {
    return (
      <div>
        <h4 className="titlecrea">{createdInfra.message}</h4>
      </div>
    );
  };

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

  const displayCreatedShipyard = () => {
    return (
      <div>
        <h4 className="titlecreaship">{createdShipyard.message}</h4>
      </div>
    );
  };

  useEffect(() => {
    console.log("Resource : ", reponse);
  }, [setReponse, reponse]);

  useEffect(() => {
    console.log("createdInfra : ", createdInfra);
  }, [setCreatedInfra, createdInfra]);

  useEffect(() => {
    console.log("Planet : ", name);
  }, [setName, name]);

  useEffect(() => {
    console.log("Erreurs : ", erreurs);
  }, [setErreurs, erreurs]);

  useEffect(() => {
    console.log("Username : ", username);
  }, [setUsername, username]);

  useEffect(() => {
    getResources();
    planetName();
    identifiant();
  }, []);

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
        <div id="dashboard">
          <div id="dashboard-container">
            <div className="contenuright d-flex align-items-center gap-5 ">
              <img
                className="logonav mt-3 ms-3"
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

              <div className="dropdown vaisseaux">
                <button
                  className="btn btn-secondary dropdown-toggle boutonnav"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vaisseaux
                </button>
                <ul className=" allv dropdown-menu">
                  <li>
                    <a className=" nom dropdown-item" href="#">
                      Chasseur: 45
                    </a>
                  </li>
                  <li>
                    <a className="nom dropdown-item" href="#">
                      Fregate:
                    </a>
                  </li>
                  <li>
                    <a className="nom dropdown-item" href="#">
                      Croiseur:
                    </a>
                  </li>
                  <li>
                    <a className="nom dropdown-item" href="#">
                      Destroyer:
                    </a>
                  </li>
                </ul>
              </div>
              <div className="energie">
                <img
                  className="icons align-self-center"
                  src="src/Components/img/icone-ressource-minerai.png"
                  alt=""
                />
                <h2>{displayOres()}</h2>
              </div>
              <div className="energie">
                <img
                  className="icons align-self-center"
                  src="src/Components/img/icone-ressource-carburant.png"
                  alt=""
                />
                <h2>{displayFuel()}</h2>
              </div>
              <div className="energie">
                <img
                  className="icons align-self-center"
                  src="src/Components/img/icone-ressource-energie.png"
                  alt=""
                />
                <h2> {displayEnergy()}</h2>
              </div>
            </div>
          </div>
          <div className="attaquecontainer me-3 mt-2">
            <img
              className="attaque"
              src="src/Components/img/Attaque.png"
              alt=""
            />
          </div>

          <div>
            <MDBPopover
              btnClassName="planete"
              className="popinfra"
              placement="right"
              title="INFRASTRUCTURE"
            >
              <MDBPopoverHeader className="titleinfra">
                <div className="d-flex justify-content-center align-items-center">
                  <p className="infra">INFRASTRUCTURES</p>
                </div>
              </MDBPopoverHeader>
              <MDBPopoverBody className="">
                <div className="d-flex flex-column">
                  <div className="displayiconnes d-flex justify-content-center">
                    <img
                      className="iconnes"
                      src="src/Components/img/icone-infrastructure-mine.png"
                    />
                    <img
                      className="iconnes"
                      src="src/Components/img/icone-infrastructure-centrale.png"
                    />
                    <img
                      className="iconnes"
                      src="src/Components/img/icone-infrastructure-raffinerie.png"
                    />
                    <img
                      className="iconnes"
                      src="src/Components/img/icone-entrepot.png"
                    />
                  </div>
                  <div className=" displayiconnes d-flex justify-content-center ">
                    <a className="construire" onClick={createMine}>
                      Construire
                    </a>
                    <a className="construire" onClick={createPowerplant}>
                      Construire
                    </a>
                    <a className="construire" onClick={createRefinery}>
                      Construire
                    </a>
                    <a className="construire" onClick={createWarehouse}>
                      Construire
                    </a>
                  </div>
                  <div className=" d-flex justify-content-center mt-3">
                    {displayErrors() === null
                      ? displayCreatedInfra()
                      : displayErrors()}
                  </div>
                  <div className=" d-flex justify-content-center mt-3">
                    <button className="myinfra" onClick={navInfra}>
                      Mes Infrastructures
                    </button>
                  </div>
                </div>
              </MDBPopoverBody>
            </MDBPopover>
            <MDBPopover
              btnClassName="planete2 "
              className="popinfra2 "
              placement="right"
              title="CHANTIER SPATIAL"
            >
              <MDBPopoverHeader className="titleinfra2">
                <div className="d-flex justify-content-center align-items-center">
                  <p className="infra2">CHANTIER SPATIAL</p>
                </div>
              </MDBPopoverHeader>
              <MDBPopoverBody className="">
                <div className="d-flex flex-column">
                  <div className="displayiconnes2 d-flex justify-content-center">
                    <img
                      className="iconnes2"
                      src="src/Components/img/icone-vaisseau-destroyer.png"
                    />
                  </div>
                  <div className=" displayiconnes2 d-flex justify-content-center ">
                    <a className="construire2" onClick={createShipyard}>
                      Construire
                    </a>
                  </div>
                  <div className=" displayiconnes2 d-flex justify-content-center ">
                    {displayErrors() === null
                      ? displayCreatedShipyard()
                      : displayErrors()}
                  </div>
                  <div className=" d-flex justify-content-center mt-3">
                    <button className="myinfra2" onClick={navShipyard}>
                      Mon Chantier Spatial
                    </button>
                  </div>
                </div>
              </MDBPopoverBody>
            </MDBPopover>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
