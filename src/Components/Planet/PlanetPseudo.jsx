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

  const redirectProfil = () => {
    let path = "/dashboard";
    navigate(path);
  };

  useEffect(() => {
    console.log(planetName);
  }, [planetName, setPlanetName]);

  return (
    <div id="start-container">
      <div className="contenu  ">
        <div className="title  ">
          <h1 className="d-flex justify-content-center">Bienvenue sur </h1>

          <form className="ex" onSubmit={sendData}>
            <input
              type="text"
              placeholder='"ex: Jupiter"'
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
