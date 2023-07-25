import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Register from "../Components/Auth/Register/Register";
import Login from "../Components/Auth/Login/Login";
import PlanetPseudo from "../Components/Planet/PlanetPseudo";
import Dashboard from "../Components/Dashboard/Dashboard";
import Passwordforget from "../Components/Auth/Passwordforget/Passwordforget";
import { createContext, useState } from "react";
import Infrastructures from "../Components/Infrastructures/Infrastructures";
import AttackGrid from "../Components/AttackGrid/AttackGrid";
import PlayGrid from "../Components/AttackGrid/PlayGrid";
import ChantierSpatial from "../Components/ChantierSpatial/ChantierSpatial";

export const AuthContext = createContext();

function App() {
  const [userLogged, setUserLogged] = useState(null);

  return (
    <div>
      <AuthContext.Provider value={[userLogged, setUserLogged]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registerPlanet" element={<PlanetPseudo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/passwordforget" element={<Passwordforget />} />
            <Route path="/infrastructures" element={<Infrastructures />} />
            <Route path="/attack" element={<AttackGrid />} />
            <Route path="/play" element={<PlayGrid />} />
            <Route path="/chantierspatial" element={<ChantierSpatial />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
