import "./Start.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { AuthContext } from "../../app/App";

function Start() {
  const [userLogged, setUserLogged] = useContext(AuthContext);

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };
  const navDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div id="start-container">
      <div className="contenu d-flex align-items-center flex-column mt-3 ">
        <div className="title d-flex justify-content-center gap-3">
          <h1>Bienvenue sur </h1>
          <input type="text" placeholder='"Jupitaire"' />
        </div>
        <button className="boutonstart" onClick={navDashboard}>
          Commencer
        </button>
      </div>
    </div>
  );
}

export default Start;
