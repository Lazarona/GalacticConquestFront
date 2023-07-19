import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import "./Mine.css";

function Mine() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  function updateTimer() {
    var targetDate = new Date("<?php echo $element['auction_end']; ?>");
    var currentDate = new Date();
    var remainingTime = targetDate.getTime() - currentDate.getTime();

    var hours = Math.floor(remainingTime / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Formatage des valeurs en chaîne de caractères avec zéro en préfixe si nécessaire
    var formattedHours = String(hours).padStart(2, "0");
    var formattedMinutes = String(minutes).padStart(2, "0");
    var formattedSeconds = String(seconds).padStart(2, "0");

    // Mettez à jour l'affichage du compte à rebours dans l'élément avec l'ID "timer"
    const timerElement = document.getElementById("timer");
    if (timerElement) {
      timerElement.innerHTML = `Temps restant : ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  }
  return (
    <div id="production">
      <div>
        <div className="d-flex justify-content-evenly">
          {/* Reste du code ici */}
          {/* ... */}
          <div class="card d-flex p-2 me-5">
            <div class="card-body">
              <h1 class="card-title d-flex justify-content-center">Mine</h1>
              <p class="card-text"></p>
              <div>
                <img src="src/Components/img/Mine.png" class="imge" />

                {/* Affichage des horodatages */}
                <p>
                  debut de la construction : {temps_de_construction.getTime()}
                </p>
                <p>
                  temp de la construction : {temp_constrution_total.getTime()}
                </p>
                <p>
                  Moment actuel de la cronstruction :{" "}
                  {timestamp3_production.getTime()}
                </p>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="delete" onClick={"delete"}>
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
                <button type="submit" class="delete" onClick="delete">
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
                <button type="submit" class="delete" onClick={"delete"}>
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

export default Mine;
