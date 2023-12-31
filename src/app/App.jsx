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
import PlayGrid from "../Components/AttackGrid/PlayGrid";
import ChantierSpatial from "../Components/ChantierSpatial/ChantierSpatial";
import Victory from "../Components/Victory/Victory";
import ResetPassword from "../Components/Auth/ResetPassword/ResetPassword";
import Battle from "../Components/AttackGrid/Battle";
import Ranking from "../Components/Auth/Ranking/Ranking";
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
            <Route path="/attack" element={<Battle />} />
            <Route path="/play" element={<PlayGrid />} />
            <Route path="/chantierspatial" element={<ChantierSpatial />} />
            <Route path="/victory" element={<Victory />} />
            <Route path="/ResetPassword/:token" element={<ResetPassword />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
