import "./Passwordforget.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-SideNav.css";
function Passwordforget() {
  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  return (
    <>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>

      <div id="PF-container">
        <div className="d-flex flex-row-reverse">
          <MDBBtn className="bouton me-3 mt-3 " onClick={navHome}>
            Accueil
          </MDBBtn>
        </div>

        <div className="d-flex justify-content-center gap-5 align-items-center mt-5">
          <img
            src="src/Components/img/logo.png"
            alt=""
            className="logor ms-3"
          />

          <div
            className="contenue px-5 py-2 ms-5 "
            style={{ backgroundColor: "rgb(241, 107, 239)" }}
          >
            <h2 className="d-flex justify-content-center p-4">
              MOT DE PASSE OUBLIÉ
            </h2>

            <h3>Veuillez saisir une adresse mail:</h3>

            <form>
              <MDBInput
                className="champs bg-dark"
                type="mail"
                wrapperClass="mb-2"
                rows={4}
                label="Email"
                name="email"
              />

              <div className="d-flex justify-content-center">
                <MDBBtn type="submit" className="boutonr mt-4 mb-4 px-5 ">
                  Envoyer
                </MDBBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Passwordforget;