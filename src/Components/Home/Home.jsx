import "./Home.css";
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

function Home() {
  return (
    <>
    <div className="logo">
      <img src="src/Components/img/logo.png" alt="" />
    </div>

    <div className="btn">
      <MDBBtn>Créer un compte</MDBBtn>
      <MDBBtn>Connexion</MDBBtn>

    </div>
    
    </>
  );
}

export default Home;
