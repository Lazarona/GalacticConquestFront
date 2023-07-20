import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import "./Infrastructures.css";

function Infrastructures() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  function updateTimer() {
    let targetDate = new Date("<?php echo $element['auction_end']; ?>");
    let currentDate = new Date();
    let remainingTime = targetDate.getTime() - currentDate.getTime();

    let hours = Math.floor(remainingTime / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Formatage des valeurs en chaîne de caractères avec zéro en préfixe si nécessaire
    let formattedHours = String(hours).padStart(2, "0");
    let formattedMinutes = String(minutes).padStart(2, "0");
    let formattedSeconds = String(seconds).padStart(2, "0");

    // Mettez à jour l'affichage du compte à rebours dans l'élément avec l'ID "timer"
    const timerElement = document.getElementById("timer");
    if (timerElement) {
      timerElement.innerHTML = `Temps restant : ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

      const temp_construction_total = null;
    }
  }
  return (
    <div id="production">
      <div>
        <div className="d-flex justify-content-evenly">
          <div class="card d-flex p-2 me-5">
            <div class="card-body">
              <h1 class="card-title d-flex justify-content-center">Mine</h1>
              <p class="card-text"></p>
              <div>
                <img src="src/Components/img/Mine.png" class="imge" />

                {/* Affichage des horodatages */}
                <p>debut de la construction : {null}</p>
                <p>temp de la construction : {null}</p>
                <p>Moment actuel de la cronstruction :{null}</p>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="delete" onClick={null}>
                  detruire le bâtiment
                </button>
              </div>
            </div>
          </div>
          <div class="card d-flex p-2 me-5">
            <div class="card-body ">
              <h1 class="card-title d-flex justify-content-center">
                Raffinerie
              </h1>
              <p class="card-text  "></p>
              <div>
                <img src="src/Components/img/refinery.png" class="imgee" />
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="delete" onClick={null}>
                  detruire le bâtiment
                </button>
              </div>
            </div>
          </div>
          <div class="card me-5">
            <div class="card-body">
              <h1 class="card-title d-flex justify-content-center ">
                Centrale
              </h1>
              <p class="card-text"></p>
              <div>
                <img src="src/Components/img/Usine.png" class="imgee" />
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="delete" onClick={null}>
                  detruire le bâtiment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infrastructures;
