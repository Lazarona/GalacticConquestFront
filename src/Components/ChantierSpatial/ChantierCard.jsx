import "./ChantierCard.css";
import React, { useEffect, useState } from "react";

function ChantierCard(props) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "src/Components/img/chasseur5.png",
    "src/Components/img/fregate2.png",
    "src/Components/img/Croiseur6.png",
    "src/Components/img/Destroyeur3.png",
  ];

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const constructShip = () => {
    switch (currentImage) {
      case 0:
        props.constructHunter();
        break;
      case 1:
        props.constructFrigate();
        break;
      case 2:
        props.constructCruiser();
        break;
      case 3:
        props.constructDestroyer();
        break;
      default:
        break;
    }
  };
  const displayErrors = () => {
    if (
      props.message.errors == undefined &&
      props.message.message == undefined
    ) {
      return null;
    }
    if (props.message.message != undefined) {
      return Object.keys(props.message).map((key) => {
        return (
          <ul key={key}>
            <h4>{props.message.message}</h4>
          </ul>
        );
      });
    } else {
      return Object.keys(props.message).map((key) => {
        return (
          <ul key={key}>
            <h1>{props.message.errors.name}</h1>
          </ul>
        );
      });
    }
  };
  useEffect(() => {
    console.log("Current IMG : ", currentImage);
  }, []);

  return (
    <>
      <div className="card cartecontenu">
        <h5 className="card-header d-flex justify-content-center">
          CHANTIER N˚{props.index}
        </h5>
        <div className="card-body">
          <div id="carousel">
            <img
              className="flechedg"
              onClick={handlePrev}
              src="src/Components/img/flechesuivant2.png"
              alt=""
            />
            <img
              className="vaisseaux"
              src={images[currentImage]}
              alt="carousel"
            />

            <img
              className="flechedg"
              onClick={handleNext}
              src="src/Components/img/flechesuivant.png"
              alt=""
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              className="boutonconstruire"
              onClick={constructShip}
            >
              Construire
            </button>
          </div>
          <div>{displayErrors()}</div>
        </div>
      </div>
    </>
  );
}

export default ChantierCard;
