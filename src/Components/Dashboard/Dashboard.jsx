import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { AuthContext } from "../../app/App";

function Dashboard() {
  const [userLogged, setUserLogged] = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="barrenavigate">
      <nav>
        <ul>
          <li className="deroulant">
            <a href="#" className="entrepot">
              Entrepôts &ensp;
            </a>
            <ul class="sous">
              <div className="starspace"></div>
              <li>
                <a href="#">⛏️ Mines</a>
              </li>
              <li>
                <a href="#">⛽Gasoil</a>
              </li>
            </ul>
          </li>
          <li class="deroulant">
            <ul class="sous"></ul>
          </li>
        </ul>

        <ul>
          <li className="deroulant">
            <a href="#" className="entrepot">
              Vaisseaux &ensp;
            </a>
            <ul class="sous">
              <div></div>
              <li>
                <a href="#">Chasseur:</a>
              </li>
              <li>
                <a href="#">Fregate</a>
              </li>
              <li>
                <a href="#">Croisseur</a>
              </li>
              <li>
                <a href="#">Destroyeur</a>
              </li>
            </ul>
          </li>
          <li class="deroulant">
            <ul class="sous"></ul>
          </li>
        </ul>
      </nav>

      <div class="conteneur"></div>
    </div>
  );
}

export default Dashboard;
