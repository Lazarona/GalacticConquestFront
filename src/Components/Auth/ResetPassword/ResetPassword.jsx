import "./ResetPassword.css";
import { redirect, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

function ResetPassword() {
  const [erreurs, setErreurs] = useState({});
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("token : ", token);
  }, []);

  const navigate = useNavigate();

  const token = Object.values(useParams()).toString();

  const navHome = () => {
    navigate("/");
  };

  const navLogin = () => {
    location.href = "http://localhost:5173/login";
  };

  function sendPW(e) {
    e.preventDefault();
    sendPassword();
  }

  const sendPassword = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/password/reset`,
      options
    );
    const donnees = await response.json();
    console.log("Reponse Backend : ", donnees);
    if (response.status == 401) {
      setErreurs(donnees);
    } else {
      setErreurs(donnees);
      navLogin();
    }
  };

  const displayErrors = () => {
    if (erreurs.errors == undefined && erreurs.message == undefined) {
      return null;
    }
    if (erreurs.errors) {
      return Object.keys(erreurs).map((key) => {
        return <p key={key}>{erreurs.errors.email}</p>;
      });
    }
    if (erreurs.message) {
      return <p>{erreurs.message}</p>;
    }
  };

  return (
    <>
      <div id="PF-container">
        <div className="d-flex flex-row-reverse">
          <MDBBtn className="bouton me-3 mt-3 mb-5 " onClick={navHome}>
            Accueil
          </MDBBtn>
        </div>

        <div className="d-flex justify-content-center gap-5 align-items-center mt-5">
          <img
            src="http://localhost:5176/src/Components/img/logo.png"
            alt=""
            className="logor ms-3"
          />

          <div
            className="contenue px-5 py-2 ms-5 "
            style={{ backgroundColor: "rgb(241, 107, 239)" }}
          >
            <h2 className="d-flex justify-content-center p-4">Mot de passe</h2>

            <h3>Réinitialiser le mot de passe:</h3>

            <div>{displayErrors()}</div>

            <form onSubmit={sendPW}>
              <MDBInput
                className="champs bg-dark"
                type="text"
                wrapperClass="mb-2"
                rows={4}
                label="Nouveau mot de passe"
                name="Nouveau mot de passe"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div className="d-flex justify-content-center">
                <MDBBtn type="submit" className="boutonr mt-4 mb-4 px-5 ">
                  Envoyer
                </MDBBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
