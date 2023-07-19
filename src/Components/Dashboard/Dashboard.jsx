import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { AuthContext } from "../../app/App";

function Dashboard() {
  const [userLogged, setUserLogged] = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
