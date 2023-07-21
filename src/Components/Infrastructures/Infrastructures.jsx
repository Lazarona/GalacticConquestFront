import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import "./Infrastructures.css";

function Infrastructures() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  // function updateTimer() {
  //   let targetDate = new Date("<?php echo $element['auction_end']; ?>");
  //   let currentDate = new Date();
  //   let remainingTime = targetDate.getTime() - currentDate.getTime();
  //   let hours = Math.floor(remainingTime / (1000 * 60 * 60));
  //   let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  //   let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  //   // Formatage des valeurs en chaîne de caractères avec zéro en préfixe si nécessaire
  //   let formattedHours = String(hours).padStart(2, "0");
  //   let formattedMinutes = String(minutes).padStart(2, "0");
  //   let formattedSeconds = String(seconds).padStart(2, "0");
  //   // Mettez à jour l'affichage du compte à rebours dans l'élément avec l'ID "timer"
  //   const timerElement = document.getElementById("timer");
  //   if (timerElement) {
  //     timerElement.innerHTML = `Temps restant : ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  //     const temp_construction_total = null;
  //   }
  // }
  return (
    <>
      <div id="infrastructure-container">
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

          <h2>MES INFRASTRUCTURES</h2>
          <img
            className="return me-3"
            src="src/Components/img/flecheRetour.png"
            alt=""
          />
        </div>

        {/* ---------BODY------ */}
        <div className="d-flex justify-content-center gap-4 mt-5">
          <div class="card">
            <h5 class="card-header d-flex justify-content-center">MINE</h5>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
          <div class="card">
            <h5 class="card-header d-flex justify-content-center">CENTRALE</h5>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
          <div class="card">
            <h5 class="card-header d-flex justify-content-center">
              RAFFINERIE
            </h5>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Infrastructures;
