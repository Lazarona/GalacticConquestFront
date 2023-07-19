import "./PlanetPseudo.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

function PlanetPseudo() {
  const [planetName, setPlanetName] = useState("");

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
      body: {
        name: planetName,
      },
    };

    // const response = await fetch(`http://127.0.0.1:8000/api/register/planet/${}`, options);
    // const data = await response.json();

    // //à rediriger vers Dashboard
    // navigate("/dashboard");
  };

  // if (keycode === "") {
  //   e.preventDefault();
  //   //empecher le rechagement de la page
  //   console.log("Vous devez remplir le champs");
  // }
  // if (keycode) {
  //   downPressed = true;
  //   //aller à la page de ...
  //   console.warn("Ce nom est définitive");
  // }

  return (
    <div id="dashboard">
      <h1>Bienvenue sur : </h1>
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
        <MDBBtn type="submit" className="envoyer mt-4 mb-4 px-5">
          Commencer
        </MDBBtn>
      </form>
    </div>
  );
}

export default PlanetPseudo;
