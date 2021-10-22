import React from 'react';
import BarraNabegacion from './componentes/BarraNabegacion';
import BotonPrincipal from './componentes/BotonPrincipal';
import Carrusel from './componentes/Carrusel';
import Ejemplo from './componentes/Ejemplo';
import Formulario from './componentes/Formulario';
import Inicio from './componentes/Inicio';




import logo from './logo.svg';

function App() {
  return (
    <div className="App">
        <Inicio />
        <BarraNabegacion />
        <Formulario />
        <Carrusel />
    </div>
  );
}

export default App;