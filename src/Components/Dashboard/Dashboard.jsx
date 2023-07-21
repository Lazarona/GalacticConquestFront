import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import {
  MDBTooltip,
  //   MDBInput,
  //   MDBBtn,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../app/App";
// import { url } from "inspector";

function Dashboard() {
  const [userLogged, setUserLogged] = useContext(AuthContext);

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  return (
    <>
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
          className="offcanvas offcanvas-start w-25 p-3 navbarmenu"
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

        <div className="dropdown vaisseaux">
          <button
            className="btn btn-secondary dropdown-toggle boutonnav"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Vaisseaux
          </button>
          <ul className=" allv dropdown-menu">
            <li>
              <a className=" nom dropdown-item" href="#">
                Chasseur: 45
              </a>
            </li>
            <li>
              <a className="nom dropdown-item" href="#">
                Fregate:
              </a>
            </li>
            <li>
              <a className="nom dropdown-item" href="#">
                Croisseur:
              </a>
            </li>
            <li>
              <a className="nom dropdown-item" href="#">
                Destroyeur:
              </a>
            </li>
          </ul>
        </div>
        <div className="energie">
          <img
            className="icons align-self-center"
            src="src/Components/img/icone-ressource-minerai.png"
            alt=""
          />
          <h2> 30000</h2>
        </div>
        <div className="energie">
          <img
            className="icons align-self-center"
            src="src/Components/img/icone-ressource-carburant.png"
            alt=""
          />
          <h2> 1000</h2>
        </div>
        <div className="energie">
          <h2> ⚡️ 45</h2>
        </div>
      </div>
      <div>
        <MDBPopover
          btnClassName="planete"
          className="popinfra "
          placement="right"
        >
          <MDBPopoverHeader className="titleinfra">
            <div className="d-flex justify-content-center align-items-center">
              <p className="infra">INFRASTRUCTURES</p>
            </div>
          </MDBPopoverHeader>
          <MDBPopoverBody className="">
            <div className="d-flex flex-column">
              <div className="displayiconnes d-flex justify-content-center">
                <img
                  className="iconnes"
                  src="src/Components/img/icone-infrastructure-mine.png"
                />
                <img
                  className="iconnes"
                  src="src/Components/img/icone-infrastructure-centrale.png"
                />
                <img
                  className="iconnes"
                  src="src/Components/img/icone-infrastructure-raffinerie.png"
                />
              </div>
              <div className=" displayiconnes d-flex justify-content-center ">
                <a className="construire" href="">
                  Construire
                </a>
                <a className="construire" href="">
                  Construire
                </a>
                <a className="construire" href="">
                  Construire
                </a>
              </div>
              <div className=" d-flex justify-content-center mt-3">
                <button className="myinfra ">Mes Infrastructures</button>
              </div>
            </div>
          </MDBPopoverBody>
        </MDBPopover>
        <MDBPopover
          btnClassName="planete2"
          className="popinfra2 "
          placement="right"
        >
          <MDBPopoverHeader className="titleinfra2">
            <div className="d-flex justify-content-center align-items-center">
              <p className="infra2">CHANTIER SPACIAL</p>
            </div>
          </MDBPopoverHeader>
          <MDBPopoverBody className="">
            <div className="d-flex flex-column">
              <div className="displayiconnes2 d-flex justify-content-center">
                <img
                  className="iconnes2"
                  src="src/Components/img/icone-vaisseau-destroyer.png"
                />
              </div>
              <div className=" displayiconnes2 d-flex justify-content-center ">
                <a className="construire2" href="">
                  Construire
                </a>
              </div>
              <div className=" d-flex justify-content-center mt-3">
                <button className="myinfra2 ">Mon Chantier Spacial</button>
              </div>
            </div>
          </MDBPopoverBody>
        </MDBPopover>
      </div>

      {/* 
      <MDBPopover btnClassName="imgPlanet" btnChildren="" placement="right">
        <MDBPopoverHeader>Popover title</MDBPopoverHeader>
        <MDBPopoverBody>
          And here's some amazing content. It's very engaging. Right?
        </MDBPopoverBody>
      </MDBPopover> */}
    </>
  );
}

export default Dashboard;
