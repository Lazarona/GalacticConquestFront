import "./ChantierSpatial.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChantierCard from "./ChantierCard";
import ChantierCardConstruct from "./ChantierCardConstruct";

function ChantierSpatial() {
  const [erreurs, setErreurs] = useState({});
  const [shipyards, setShipyards] = useState([]);
  const [hunter, setHunter] = useState([]);
  const [frigate, setFrigate] = useState([]);
  const [cruiser, setCruiser] = useState([]);
  const [destroyer, setDestroyer] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

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

  const getShipyards = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const reqData = await fetch("http://127.0.0.1:8000/api/shipyards", options);
    const resData = await reqData.json();
    console.log("Data (Shipyards) : ", resData);
    if (reqData.status == 401) {
      setErreurs(resData);
    } else {
      setShipyards(resData.shipYards);
    }
  };

  const displayShipyards = () => {
    return shipyards.map((e, index) => {
      {
        return e.construction_state == 0 ? (
          <ChantierCard
            key={index}
            index={index + 1}
            constructHunter={() => buildHunter(e)}
            constructFrigate={() => buildFrigate(e)}
            constructCruiser={() => buildCruiser(e)}
            constructDestroyer={() => buildDestroyer(e)}
            message={() => displayErrors()}
          />
        ) : (
          <ChantierCardConstruct
            key={index}
            index={index + 1}
            idShipYard={e.id}
            claim={() => claimShip(e)}
            message={() => displayErrors()}
          />
        );
      }
    });
  };

  const buildHunter = async (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type: "hunter",
      }),
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/create/hunter/${e.id}`,
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (buildHunter) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setHunter(donnees);
      handleRefresh();
    }
  };

  const buildFrigate = async (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type: "frigate",
      }),
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/create/frigate/${e.id}`,
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (buildFrigate) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setFrigate(donnees);
      handleRefresh();
    }
  };

  const buildCruiser = async (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type: "cruiser",
      }),
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/create/cruiser/${e.id}`,
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (buildCruiser) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setCruiser(donnees);
      handleRefresh();
    }
  };

  const buildDestroyer = async (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type: "destroyer",
      }),
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/create/destroyer/${e.id}`,
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (buildDestroyer) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setDestroyer(donnees);
      handleRefresh();
    }
  };

  const claimShip = async (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/claim/ship/${e.id}`,
      options
    );
    const donnees = await response.json();
    console.log("Reponse de l'API (claimShip) : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setErreurs(donnees);
      handleRefresh();
    }
  };

  useEffect(() => {
    getShipyards();
  }, []);
  useEffect(() => {
    console.log("Shipyards : ", shipyards);
  }, [shipyards, setShipyards]);
  useEffect(() => {
    console.log("Hunter : ", hunter);
  }, [hunter, setHunter]);

  return (
    <>
      {localStorage.getItem("token") === null ? (
        <div id="cs-container">
          <div className="d-flex justify-content-center titleinfra2">
            {displayErrors()}
          </div>
          <div className="d-flex justify-content-center titleinfra2">
            <button className="boutonconstruire" onClick={deconnexion}>
              Revenir à l'accueil
            </button>
          </div>
        </div>
      ) : (
        <div key={refreshKey} id="cs-container">
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
              className="offcanvas offcanvas-start p-3 navbarmenu"
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

            <h2>CHANTIER SPATIAL</h2>
            <img
              className="return me-1"
              src="src/Components/img/flecheRetour.png"
              alt=""
              onClick={navDashboard}
            />
          </div>

          {/* ---------BODY------ */}
          <div className="d-flex justify-content-center flex-wrap gap-4 mt-3">
            {displayShipyards()}
          </div>
        </div>
      )}
    </>
  );
}

export default ChantierSpatial;
