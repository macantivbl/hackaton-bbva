import React from 'react';
import BarraNabegacion from './componentes/BarraNabegacion';
import 'animate.css';
import Carrusel from './componentes/Carrusel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Perfil from './Perfil/Perfil';
import PoppersEjem from './Pruebas/PoppersEjem';
import ManejoFinanzas from './Tips/ManejoFinanzas';
import Registro from './Registro/Registro';
import SobreNosotros from './Preguntas/SobreNosotros';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/' exact>
            <BarraNabegacion />
            <Carrusel />
          </Route>

          <Route path="/Perfil">
            <BarraNabegacion />
            <Perfil />
          </Route>

          <Route path="/Tips">
            <BarraNabegacion />
            <ManejoFinanzas />
          </Route>

          <Route path="/Registro">
            <BarraNabegacion />
            <Registro />
          </Route>

          <Route path="/Tutorial">
            <BarraNabegacion />
            <SobreNosotros/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;