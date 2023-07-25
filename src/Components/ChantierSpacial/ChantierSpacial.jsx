import "./ChantierSpacial.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function ChantierSpacial() {
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
        <h2>MON CHANTIER SPACIAL</h2>
      </div>
    </>
  );
}

export default ChantierSpacial;
