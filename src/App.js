import React from 'react';
import BarraNabegacion from './componentes/BarraNabegacion';
import 'animate.css';
import Carrusel from './componentes/Carrusel';
import Formulario from './componentes/Formulario';
import Inicio from './componentes/Inicio';


import PoppersEjem from './Pruebas/PoppersEjem';

function App() {
  return (
    <div className="App">
        <Inicio />
        <BarraNabegacion />
        <Formulario />
        <Carrusel />
        <PoppersEjem />
    </div>
  );
}

export default App;