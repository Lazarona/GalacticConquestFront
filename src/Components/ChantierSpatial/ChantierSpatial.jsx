import "./ChantierSpatial.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function ChantierSpatial() {
  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };
  const navDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div id="cs-container">
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
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
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

          <h2>CHANTIER SPACIAL</h2>
          <img
            className="return me-1"
            src="src/Components/img/flecheRetour.png"
            alt=""
            onClick={navDashboard}
          />
        </div>

        {/* ---------BODY------ */}
        <div className="d-flex justify-content-center gap-4 mt-5">
          <div className="card">
            <h5 className="card-header d-flex justify-content-center">
              Vaisseaux
            </h5>
            <div className="card-body">
              <div className="card-title"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChantierSpatial;
