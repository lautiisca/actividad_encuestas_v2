import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import CrearEncuesta from "./components/CrearEncuesta";
import Encuesta from "./components/Encuesta";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import encuestas from "./data/encuestas.json";
import logo from './logo.svg';
import './styles/App.css';

function App() {

  const [listaEncuestas, setListaEncuestas] = useState(encuestas);
const agregarEncuesta = (nuevaEncuesta) => {nuevaEncuesta.id = listaEncuestas.length + 1
setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
};
const responderEncuesta = (id, respuestas) => {
const encuesta = listaEncuestas.find(enc => enc.id ===
parseInt(id));
encuesta.respuestas = [respuestas];
};





  return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ejercicio 5 - Encuestas en React v2</h1>
      </header>
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio listaEncuestas={listaEncuestas} />} />
        <Route
          path="/encuesta/crear"
          element={<CrearEncuesta agregarEncuesta={agregarEncuesta} />}
        />
        <Route
          path="/encuesta/:id"
          element={
            <Encuesta
              listaEncuestas={listaEncuestas}
              responderEncuesta={responderEncuesta}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
      <footer className="App-footer">
        <p>
          Página creada para el Ejercicio 5 de Curso Frontend de React 2023 -
          Ing. Rubén Romero | Alumno: Lautaro Scarafia
        </p>
      </footer>
    </div>
  );
}

export default App;
