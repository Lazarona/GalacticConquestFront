import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Register from "../Components/Auth/Register/Register";
import Login from "../Components/Auth/Login/Login";
import PlanetPseudo from "../Components/Planet/PlanetPseudo";
import Dashboard from "../Components/Dashboard/Dashboard";
import Passwordforget from "../Components/Auth/Passwordforget/Passwordforget";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerPlanet" element={<PlanetPseudo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/passwordforget" element={<Passwordforget />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
