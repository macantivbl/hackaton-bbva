import React from 'react';
import BarraNabegacion from './componentes/BarraNabegacion';

import Carrusel from './componentes/Carrusel';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Perfil from './Perfil/Perfil';
import ManejoFinanzas from './Tips/ManejoFinanzas';
import Registro from './Registro/Registro';
import SobreNosotros from './Preguntas/SobreNosotros';
import Inicio from './componentes/Inicio';
import MetasFinancieras from './Tips/MetasFinancieras';
import ListaTusGastos from './Tips/ListaTusGastos';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>

          

          <Route path='/' exact>
            <BarraNabegacion />
            <Carrusel />
            <Inicio />
          </Route>



          <Route path="/Perfil">
          <BarraNabegacion />
            <Perfil />
          </Route>

          <Route path="/Tips/Metas">
            <BarraNabegacion />
            <MetasFinancieras />
          </Route>

          <Route path="/Tips/ListaTusGastos">
            <BarraNabegacion />
            <ListaTusGastos/>
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
            <SobreNosotros />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;