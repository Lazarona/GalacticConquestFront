import "./ChantierSpatial.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function ChantierSpatial() {
  const navigate = useNavigate();

  const navLogin = () => {
    navigate("/login");
  };
  const navRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <div id="cs-container">
        <h2>MON CHANTIER SPATIAL</h2>
      </div>
    </>
  );
}

export default ChantierSpatial;
