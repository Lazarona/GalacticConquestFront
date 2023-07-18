import "./Login.css";
import { useNavigate } from "react-router-dom";
import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

function Login() {

  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  }

  
  return (

  <div id="login-container">
  <div className="d-flex flex-row-reverse">
      <MDBBtn className="bouton me-3 mt-3 " onClick={navHome}>Accueil</MDBBtn>
   </div>

  <div className="d-flex justify-content-center gap-5 align-items-center mt-5" >

    <img src="src/Components/img/logo.png" alt="" className="logor ms-3" />

    <div className="contenue px-5 py-2 ms-5 " style={{backgroundColor: "rgb(241, 107, 239)"}}>
      <h2 className="d-flex justify-content-center p-4">CONNEXION</h2>

      <form >
      
        <MDBInput className="champs bg-dark  " type='text'  wrapperClass='mb-2' label='Pseudo' name="username" />

        <MDBInput className="champs bg-dark" type='password' wrapperClass='mb-2'  rows={4} label='Mot de passe' name="password" />
  
        
        <div className="d-flex justify-content-center">
          <MDBBtn type='submit' className='boutonr mt-4 mb-4 px-5 ' >
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
