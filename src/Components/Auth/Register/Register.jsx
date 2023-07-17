import "./Register.css";

function Register() {
  return (
    <div>
      <button
        type="submite"
        onClick="connexion"
        name="connexion"
        className="connexion"
      >
        connexion
      </button>

      <div className="row">
        <img src="src/Components/img/logo.png" className="logo" />
        <div className="container">
          <h1 className="titre">INSCRIPTION</h1>
          <form action="" method="post">
            <label htmlFor="last_name">
              <p className="text"> Nom :</p>
              <input type="text" name="last_name" value="" className="input" />
            </label>
            <br />
            <label htmlFor="first_name">
              <p className="text"> Prénom :</p>
              <input type="text" name="first_name" value="" className="input" />
            </label>
            <br />
            <label htmlFor="email">
              <p className="text"> Mail :</p>
              <input type="text" name="email" value="" className="input" />
            </label>
            <br />
            <label htmlFor="password">
              <p className="text"> Mot de passe :</p>
              <input type="text" name="password" value="" className="input" />
            </label>
            <br />
            <label htmlFor="birth_date">
              <p className="text"> Date de naissance :</p>
              <input type="text" name="birth_date" value="" className="input" />
            </label>
            <br />
            <label htmlFor="username">
              <p className="text"> Pseudo :</p>
              <input type="text" name="username" value="" className="input" />
            </label>
          </form>
        </div>
      </div>
      <button type="submit" onClick="" name="" className="jouer">
        Jouer
      </button>
    </div>
  );
}

export default Register;
