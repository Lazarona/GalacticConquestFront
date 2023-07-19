import "./Register.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [erreurs, setErreurs] = useState({});

  // Récupération des données saisies dans les inputs
  const sendData = (e) => {
    e.preventDefault();
    register();
  };

  // Envoi des données dans l'API avec une requête HTML POST
  const register = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        username: username,
        birth_date: birth_date,
      }),
    };
    const response = await fetch(`http://127.0.0.1:8000/api/register`, options);
    const donnees = await response.json();
    console.log("API Response", donnees); //
    setErreurs(donnees);
    if (response.status == 400) {
      displayErrors();
    } else {
      //getToken(donnees.token);
      //redirectPlanet();
    }
  };

  const displayErrors = () => {
    return Object.keys(erreurs).map((key, e) => {
      return (
        <div key={key}>
          <p>{erreurs.errors[e]}</p>
        </div>
      );
    });
  };

  // Récupère le token et le stocke dans le localStorage
  const getToken = (token) => {
    localStorage.setItem("token", token);
  };

  // Redirection du bouton Accueil vers la page d'accueil
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  // Fonction utilisé pour rediriger l'utilisateur vers sa page de profil
  const redirectPlanet = () => {
    let path = "/registerPlanet";
    navigate(path);
  };

  useEffect(() => {
    console.log("Username : ", username);
  }, [setUsername, username]);
  useEffect(() => {
    console.log("Password : ", password);
  }, [setPassword, password]);
  useEffect(() => {
    console.log("Email : ", email);
  }, [setEmail, email]);
  useEffect(() => {
    console.log("First_name : ", first_name);
  }, [setFirst_name, first_name]);
  useEffect(() => {
    console.log("Last_name : ", last_name);
  }, [setLast_name, last_name]);
  useEffect(() => {
    console.log("Birth_date : ", birth_date);
  }, [setBirth_date, birth_date]);
  useEffect(() => {
    console.log("Erreurs :", erreurs);
  }, [setErreurs, erreurs]);

  return (
    <div id="register-container">
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
          <h2 className="d-flex justify-content-center p-4">INSCRIPTION</h2>

          {displayErrors()}

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
              type="text"
              wrapperClass="mb-2"
              label="Prénom"
              name="first_name"
              onChange={(e) => {
                setFirst_name(e.target.value);
              }}
            />

            <MDBInput
              className="champs bg-dark"
              type="text"
              wrapperClass="mb-2"
              label="Nom"
              name="last_name"
              onChange={(e) => {
                setLast_name(e.target.value);
              }}
            />

            <MDBInput
              className="champs bg-dark"
              type="mail"
              wrapperClass="mb-2"
              rows={4}
              label="Adresse mail"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
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

            <MDBInput
              className="champs bg-dark text-black-50"
              type="date"
              wrapperClass="mb-2"
              rows={4}
              label="Date de naissance"
              name="birth_date"
              onChange={(e) => {
                setBirth_date(e.target.value);
              }}
            />

            <div className="d-flex justify-content-center">
              <MDBBtn type="submit" className="boutonr mt-2 px-5 ">
                Play
              </MDBBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
