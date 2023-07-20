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
        <div className="offcanvas-body d-flex flex-column mb-3 gap-3">
          <a className="boutonm">PROFIL</a>
          <a className="boutonm">ACHAT</a>
          <a className="boutondec" onClick={navHome}>
            DECONNEXION
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
