import "./ChantierSpatial.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChantierSpatial() {
  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };
  const navDashboard = () => {
    navigate("/dashboard");
  };
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "src/Components/img/chasseur5.png",
    "src/Components/img/fregate2.png",
    "src/Components/img/Croiseur6.png",
    "src/Components/img/Destroyeur3.png",
  ];

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <>
      <div id="cs-container">
        <div className="navbar d-flex ">
          <img
            className="logonav mt-2 ms-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            src="src/Components/img/nvb.png"
            alt=""
          />
          <div
            className="offcanvas offcanvas-start p-3 navbarmenu"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
              <button
                type="button"
                className="boutonclose btn-close "
                data-bs-dismiss="offcanvas"
                aria-label="FERMER"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column mb-3 gap-3">
              <a className="boutonm">PROFIL</a>
              <a className="boutonm">ACHAT</a>
              <a className="boutondec" onClick={navHome}>
                DECONNEXION
              </a>
            </div>
          </div>

          <h2>CHANTIER SPACIAL</h2>
          <img
            className="return me-1"
            src="src/Components/img/flecheRetour.png"
            alt=""
            onClick={navDashboard}
          />
        </div>

        {/* ---------BODY------ */}
        <div className="d-flex justify-content-center flex-wrap gap-4 mt-3">
          <div className="card">
            <h5 className="card-header d-flex justify-content-center">
              CHANTIER N˚
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
                <button type="button" className="boutonconstruire ">
                  Construire
                </button>

                <div className="card-title"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <h5 className="card-header d-flex justify-content-center">
              CHANTIER N˚
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
                <button type="button" className="boutonconstruire ">
                  Construire
                </button>

                <div className="card-title"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <h5 className="card-header d-flex justify-content-center">
              CHANTIER N˚
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
                <button type="button" className="boutonconstruire ">
                  Construire
                </button>

                <div className="card-title"></div>
              </div>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header d-flex justify-content-center">
              CHANTIER N˚
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
                <button type="button" className="boutonconstruire ">
                  Construire
                </button>

                <div className="card-title"></div>
              </div>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header d-flex justify-content-center">
              CHANTIER N˚
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
                <button type="button" className="boutonconstruire ">
                  Construire
                </button>

                <div className="card-title"></div>
              </div>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header d-flex justify-content-center">
              CHANTIER N˚
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
                <button type="button" className="boutonconstruire ">
                  Construire
                </button>

                <div className="card-title"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChantierSpatial;
