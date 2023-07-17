import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const sendFormAPI = () => {};
  return (
    <div className="w-100 h-75">
      <div className="row d-flex justify-content-end align-items-center mb-5">
        <div className="col-2 d-flex">
          <button
            type="submit"
            onClick="connexion"
            name="connexion"
            className="connexion"
          >
            connexion
          </button>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-center">
        <div className="col">
          <img src="src/Components/img/logo.png" className="logo" />
        </div>
        <div className="col">
          <div className="container w-50">
            <h1 className="titre">INSCRIPTION</h1>
            <form action="" method="post" className="d-flex flex-column gap-1">
              <label htmlFor="last_name">
                <p className="text"> Nom :</p>
                <input
                  type="text"
                  name="last_name"
                  value=""
                  className="input"
                />
              </label>

              <label htmlFor="first_name">
                <p className="text"> Prénom :</p>
                <input
                  type="text"
                  name="first_name"
                  value=""
                  className="input"
                />
              </label>

              <label htmlFor="username">
                <p className="text"> Pseudo :</p>
                <input type="text" name="username" value="" className="input" />
              </label>

              <label htmlFor="email">
                <p className="text"> Mail :</p>
                <input type="text" name="email" value="" className="input" />
              </label>

              <label htmlFor="password">
                <p className="text"> Mot de passe :</p>
                <input type="text" name="password" value="" className="input" />
              </label>

              <label htmlFor="birth_date">
                <p className="text"> Date de naissance :</p>
                <input
                  type="text"
                  name="birth_date"
                  value=""
                  className="input"
                />
              </label>

              <input
                type="submit"
                onClick={sendFormAPI()}
                name=""
                className="jouer"
                value="Jouer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
