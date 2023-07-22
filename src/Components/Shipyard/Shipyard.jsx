import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "./Shipyard.css";

function Shipyard() {
  const [reponse, setReponse] = useState({});

  //   const construction = async () => {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     };
  //     const response = await fetch("http://127.0.0.1:8000/api/shipyard", options);
  //     const data = await response.json();
  //     console.log("Reponse de l'API : ", data);
  //     setReponse(data);
  //   };

  //données reçues luent grâce à JSON

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "src/Components/img/chasseur.png",
    "src/Components/img/fregate.png",
    "src/Components/img/Croiseur.png",
    "src/Components/img/Destroyeur.png",
  ];

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div id="carousel">
      <img src={images[currentImage]} alt="carousel" />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
export default Shipyard;
