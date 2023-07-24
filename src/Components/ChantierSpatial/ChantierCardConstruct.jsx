import "./ChantierCard.css";
import React, { useEffect, useState } from "react";

function ChantierCardConstruct(props) {
  const [claimShip, setClaimShip] = useState([]);
  const [imageConstruct, setImageConstruct] = useState(0);
  const [constructedShip, setConstructedShip] = useState([]);

  const images = [
    "src/Components/img/chasseur5.png",
    "src/Components/img/fregate2.png",
    "src/Components/img/Croiseur6.png",
    "src/Components/img/Destroyeur3.png",
  ];

  const getConstructedShip = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const reqData = await fetch(
      `http://127.0.0.1:8000/api/shipyard/${props.idShipYard}/constructing_ship`,
      options
    );
    const resData = await reqData.json();
    console.log("Data (ShipConstruct) : ", resData);
    if (reqData.status == 401) {
      setErreurs(resData);
    } else {
      setConstructedShip(resData.ship);
    }
  };

  const setImageShipConstructed = () => {
    if (constructedShip.type == "hunter") {
      setImageConstruct(images[0]);
    }
    if (constructedShip.type == "frigate") {
      setImageConstruct(images[1]);
    }
    if (constructedShip.type == "cruiser") {
      setImageConstruct(images[2]);
    }
    if (constructedShip.type == "destroyer") {
      setImageConstruct(images[3]);
    }
  };

  const displayConstructingShip = () => {
    const finished_at = new Date(constructedShip.finished_at);
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 2);
    {
      return finished_at > currentDate ? (
        <img
          className="vaisseauConstruct"
          src={imageConstruct}
          alt="vaisseauConstruct"
        />
      ) : (
        <img
          className="vaisseau"
          src={imageConstruct}
          alt="vaisseauConstruct"
        />
      );
    }
  };

  useEffect(() => {
    getConstructedShip();
    setImageShipConstructed();
  }, []);

  useEffect(() => {
    console.log("Constructed Ship : ", constructedShip);
  }, [constructedShip, setConstructedShip]);

  return (
    <>
      <div className="card">
        <h5 className="card-header d-flex justify-content-center">
          CHANTIER N˚{props.index}
        </h5>
        <div className="card-body">
          {displayConstructingShip()}
          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              className="boutonconstruire"
              onClick={props.claim}
            >
              Recuperer
            </button>
          </div>
          <div className="d-flex justify-content-center mt-3">
            {props.message}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChantierCardConstruct;
