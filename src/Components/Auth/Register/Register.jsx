import "./Register.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

function Register() {
  const [data, setData] = useState({});
  const [erreurs, setErreurs] = useState([]);

  // Redirection du bouton Accueil vers la page d'accueil
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  // Récupération des données saisies dans les inputs
  const getData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setData(Object.fromEntries(formData));
    sendDataAPI();
  };

  // Envoi des données dans l'API avec une requête HTML POST
  const sendDataAPI = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        birth_date: data.birth_date,
      }),
    };
    const response = await fetch(`http://127.0.0.1:8000/api/register`, options);
    const donnees = await response.json();
    console.log("API Response", donnees); //
    setErreurs([donnees]);
    if (response.status == 400) {
      // alert(donnees.errors.username[0]);
      displayErrors();
    } else {
      // Si la requête est un succès, redirige l'utilisateur vers le choix de planete
      //redirectPlanet();
    }
  };

  const displayErrors = () => {
    // if (erreurs.errors.first_name != undefined) {
    //   return errors.errors.first_name;
    // }
    // if (erreurs.errors.last_name != undefined) {
    //   return errors.errors.last_name;
    // }
    // if (erreurs.errors.email != undefined) {
    //   return errors.errors.email;
    // }
    // if (erreurs.errors.birth_date != undefined) {
    //   return errors.errors.birth_date;
    // }
    // if (erreurs.errors.password != undefined) {
    //   return errors.errors.password;
    // }
    // if (erreurs.errors.username != undefined) {
    //   return errors.errors.username;
    // }
  };
  // Fonction utilisé pour rediriger l'utilisateur vers sa page de profil
  // const redirectPlanet = () => {
  //   let path = "/registerPlanet";
  //   navigate(path);
  // };

  useEffect(() => {
    getData;
    console.log("data : ", data);
    sendDataAPI();
  }, [setData, data]);

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

          <ul className="">{displayErrors()}</ul>

          <form onSubmit={getData}>
            <MDBInput
              className="champs bg-dark  "
              type="text"
              wrapperClass="mb-2"
              label="Pseudo"
              name="username"
            />

            <MDBInput
              className="champs bg-dark"
              type="text"
              wrapperClass="mb-2"
              label="Prénom"
              name="first_name"
            />

            <MDBInput
              className="champs bg-dark"
              type="text"
              wrapperClass="mb-2"
              label="Nom"
              name="last_name"
            />

            <MDBInput
              className="champs bg-dark"
              type="mail"
              wrapperClass="mb-2"
              rows={4}
              label="Adresse mail"
              name="email"
            />

            <MDBInput
              className="champs bg-dark"
              type="password"
              wrapperClass="mb-2"
              rows={4}
              label="Mot de passe"
              name="password"
            />

            <MDBInput
              className="champs bg-dark text-black-50"
              type="date"
              wrapperClass="mb-2"
              rows={4}
              label="Date de naissance"
              name="birth_date"
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
