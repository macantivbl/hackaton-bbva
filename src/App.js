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
            <Perfil />
          </Route>
          <Route path="/Tips">
            <ManejoFinanzas/>
          </Route>

          <Route path="/Registro">
            <Registro/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;