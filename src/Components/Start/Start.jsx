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
      <img
        class="logonav "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        src="src/Components/img/nvb.png"
        alt=""
      />
      <div
        class="offcanvas offcanvas-start w-25 p-3 bg-black"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
            MENU
          </h5>
          <button
            type="button"
            class="boutonclose btn-close "
            data-bs-dismiss="offcanvas"
            aria-label="FERMER"
          ></button>
        </div>
        <div class="offcanvas-body d-flex flex-column mb-3 gap-3">
          <a className="boutonm">PROFIL</a>
          <a className="boutonm">ACHAT</a>
          <a className="boutondec" onClick={navHome}>
            DECONNEXION
          </a>
        </div>
      </div>
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
