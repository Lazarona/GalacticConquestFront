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
    }
    return Object.keys(erreurs).map((key) => {
      return (
        <ul key={key}>
          <p>{erreurs.errors.name}</p>
        </ul>
      );
    });
  };

  const redirectProfil = () => {
    let path = "/dashboard";
    navigate(path);
  };

  useEffect(() => {
    console.log(planetName);
  }, [planetName, setPlanetName]);

  return (
    <div>
      <h1>Bienvenue sur : </h1>
      {displayErrors()}
      <form onSubmit={sendData}>
        <MDBInput
          label="Choisissez votre Planète"
          type="text"
          id="formWhite"
          contrast
          onChange={(e) => {
            setPlanetName(e.target.value);
          }}
        />
        <MDBBtn type="submit" className="mt-4 mb-4 px-5">
          Commencer
        </MDBBtn>
      </form>
    </div>
  );
}

export default PlanetPseudo;
