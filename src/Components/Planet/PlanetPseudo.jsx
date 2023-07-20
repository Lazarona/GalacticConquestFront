import "./PlanetPseudo.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { AuthContext } from "../../app/App";

function PlanetPseudo() {
  const [userLogged, setUserLogged] = useContext(AuthContext);
  const [planetName, setPlanetName] = useState("");
  const [erreurs, setErreurs] = useState({});

  const navigate = useNavigate();

  const sendData = (e) => {
    e.preventDefault();
    createPlanet();
  };

  const createPlanet = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: planetName,
      }),
    };

    const response = await fetch(
      `http://127.0.0.1:8000/api/register/planet/${userLogged.id}`,
      options
    );
    const data = await response.json();
    console.log("API Response : ", data);
    setErreurs(data);
    if (response.status == 400 || response.status == 401) {
      displayErrors();
    } else {
      getDefaultWarehouses();
    }
  };

  const getDefaultWarehouses = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/default_warehouses/${userLogged.id}`,
      options
    );
    const data = await response.json();
    console.log("API Response (Warehourses) : ", data);

    if (response.status == 401) {
      displayErrors();
    } else {
      getDefaultResource();
    }
  };

  const getDefaultResource = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/resource/${userLogged.id}`,
      options
    );
    const data = await response.json();
    console.log("API Response (Resources) : ", data);

    if (response.status == 401) {
      displayErrors();
    } else {
      redirectProfil();
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
            <p>{erreurs.message}</p>
          </ul>
        );
      });
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

  const redirectProfil = () => {
    let path = "/dashboard";
    navigate(path);
  };

  useEffect(() => {
    console.log(planetName);
  }, [planetName, setPlanetName]);

  return (
    <div id="start-container">
      <img
        className="logonav "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        src="src/Components/img/nvb.png"
        alt=""
      />
      <div
        className="offcanvas offcanvas-start w-25 p-3 bg-black"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            MENU
          </h5>
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
          <a className="boutondec">DECONNEXION</a>
        </div>
      </div>
      <div className="contenu d-flex align-items-center flex-column mt-3 ">
        <div className="title d-flex justify-content-center gap-3">
          <h1>Bienvenue sur </h1>
          <form onSubmit={sendData}>
            <input
              type="text"
              placeholder='"Jupiter"'
              onChange={(e) => {
                setPlanetName(e.target.value);
              }}
            />
            {displayErrors()}
            <input type="submit" className="boutonstart" value="Commencer" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default PlanetPseudo;
