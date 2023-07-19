import "./Login.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const sendData = (e) => {
    e.preventDefault();
    enter();
  };

  const enter = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    const response = await fetch("http://127.0.0.1:8000/api/login", options);
    const donnees = await response.json();
    console.log("Reponse de l'API : ", donnees);

    if (response.status == 400) {
      // alert(donnees.errors.username[0]);
      //displayErrors(donnees.errors);
    } else {
      // Si la requête est un succès, redirige l'utilisateur vers le choix de planete
      getToken(donnees.token);
      //redirectProfil();
    }
  };

  // Fonction utilisé pour rediriger l'utilisateur vers sa page de profil
  const redirectProfil = () => {
    let path = "/dashboard";
    navigate(path);
  };

  const getToken = (token) => {
    localStorage.setItem("token", token);
  };

  const navHome = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log("Username : ", username);
  }, [setUsername, username]);
  useEffect(() => {
    console.log("Password : ", password);
  }, [setPassword, password]);

  return (
    <div id="login-container">
      <div className="d-flex flex-row-reverse">
        <MDBBtn className="bouton me-3 mt-3 " onClick={navHome}>
          Accueil
        </MDBBtn>
      </div>

      <div className="d-flex justify-content-center gap-5 align-items-center mt-5">
        <img src="src/Components/img/logo.png" alt="" className="logor ms-3" />

        <div
          className="contenue px-5 py-2 ms-5 "
          style={{ backgroundColor: "rgb(241, 107, 239)" }}
        >
          <h2 className="d-flex justify-content-center p-4">CONNEXION</h2>

          <form onSubmit={sendData}>
            <MDBInput
              className="champs bg-dark  "
              type="text"
              wrapperClass="mb-2"
              label="Pseudo"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <MDBInput
              className="champs bg-dark"
              type="password"
              wrapperClass="mb-2"
              rows={4}
              label="Mot de passe"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div className="d-flex justify-content-center">
              <MDBBtn type="submit" className="boutonr mt-4 mb-4 px-5 ">
                Play
              </MDBBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
