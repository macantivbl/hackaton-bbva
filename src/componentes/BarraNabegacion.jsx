import React from 'react'
import logoInicio from './img/logoInicio.png'
import Carrusel from './Carrusel';
import Perfil from '../Perfil/Perfil';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const BarraNabegacion = () => {
    return (
        <div >

            <nav className="navbar navbar-light bg-light fixed-top" >
                <div className="container-fluid" id='tituloPaginaNombre'>
                    <div className="mx-auto" >
                        <a id='tituloPaginaNombreTexto' className="navbar-brand" href="#">Kukulkan APP</a>
                    </div>


                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon">
                            
                            <a href="#" className="navbar-brand ">
                                <img src={logoInicio} alt="" className="mx-auto"

                                ></img>
                            </a>
                        </span>
                    </button>


                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div id='tituloPagina' className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <Link to='/'>
                                    <a class="nav-link" >BBVA</a>
                                </Link></h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body" id='tituloPagina' >
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                
                                <Link to='/Perfil'>
                                <a class="nav-link" >Perfil</a>
                                    
                                </Link>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Tutorial</a>
                                </li>
                                <li className="nav-item">
                                <Link to='/Tips'>
                                <a class="nav-link" >Manejo de Finanzas</a>
                                    
                                </Link>
                                </li>

                            </ul>
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <Link to='/Registro'>
                                <button type="button" className="btn btn-primary">Registro</button>
                                </Link>
                                
                            </div>
                            <div className="d-flex flex-column bd-highlight mb-3">
                            <Link to='/Registro'>
                                <button type="button" className="btn btn-info">Iniciar Sesion</button>
                                </Link>
                                
                            </div>


                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default BarraNabegacion
