import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { AuthContext } from "../../app/App";

function Dashboard() {
  const [userLogged, setUserLogged] = useContext(AuthContext);

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  return (
    <div id="dashboard-container">
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
        <div class="offcanvas-body d-flex flex-column mb-3 gap-3">
          <a className="boutonm">PROFIL</a>
          <a className="boutonm">ACHAT</a>
          <a className="boutondec" onClick={navHome}>
            DECONNEXION
          </a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Entrepôt
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              <img
                className="icons"
                src="src/Components/img/icone-ressource-minerai.png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <img
                className="icons"
                src="src/Components/img/icone-ressource-carburant.png"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Vaisseaux
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Chasseur:
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Fregate:
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Croisseur:
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Destroyeur:
            </a>
          </li>
        </ul>
      </div>
      <div className="energie">
        <h4>⚡️</h4>
      </div>
    </div>
  );
}

export default Dashboard;
