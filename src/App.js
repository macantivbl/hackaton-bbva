import React from 'react';
import BarraNabegacion from './componentes/BarraNabegacion';
import ImagenCarga from '../src/componentes/img/KALAN.png'

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
import { auth } from './firebase'
function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  }, [])
  return firebaseUser !== false ? (
    <div className="App">
      <Router>
        <Switch>



          <Route path='/' exact>
            <BarraNabegacion firebaseUser={firebaseUser}/>
            <Carrusel />
            <Inicio />
          </Route>

          <Route path="/Perfil">
            <BarraNabegacion firebaseUser={firebaseUser}/>
            <Perfil />
          </Route>

          <Route path="/Tips/Metas">
            <BarraNabegacion firebaseUser={firebaseUser}/>
            <MetasFinancieras />
          </Route>

          <Route path="/Tips/ListaTusGastos">
            <BarraNabegacion firebaseUser={firebaseUser}/>
            <ListaTusGastos />
          </Route>

          <Route path="/Tips">
            <BarraNabegacion firebaseUser={firebaseUser}/>
            <ManejoFinanzas />
          </Route>

          <Route path="/Registro">
            <Registro />
          </Route>

          <Route path="/admin">


          </Route>

          <Route path="/Tutorial">
            <BarraNabegacion firebaseUser={firebaseUser}/>
            <SobreNosotros />
          </Route>

        </Switch>
      </Router>
    </div>
  ) : (
    <div className="text-center">
      <div className="spinner-border text-primary" style={{width: '15rem', height: '15rem'}} >
        <span className="visually-hidden">Cargando...</span>
      </div>
      <div>
        <h1>Cargando....</h1>
      </div>
    </div>
  )
}

export default App;