import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Usuarios from "./pages/Usuarios/Usuarios";
import Resultados from "./pages/Resultados/Resultados";
function App() {
  
  return (
    <BrowserRouter basename="/">
      <div className="container">
        <Menu />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/Resultados" element={<Resultados />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
