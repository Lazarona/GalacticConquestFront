import { useNavigate } from "react-router-dom";
import "./RangKing.css";
import React, { useEffect, useState } from "react";

const RangKing = () => {
  return (
    <div id="rangking">
      <div class="card text-center">
        <div class="card-header">Classement Galactique</div>
        <div class="card-body">
          <h5 class="card-title" className="victorius">
            VICTORIUS
          </h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Retour{" "}
          </a>
        </div>
        <div class="card-footer text-body-secondary">
          Classement à ce jour:test
        </div>
      </div>
    </div>
  );
};

export default RangKing;
