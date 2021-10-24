import React from 'react'
import logoInicio from './img/KALAN.png'

import {Link} from "react-router-dom";
const BarraNabegacion = () => {
    return (
        <div >

            <nav id="PaddingTitulo" className="navbar navbar-light bg-light fixed-top" >
                <div className="container-fluid" id='tituloPaginaNombre'>
                    <div className="mx-auto" >
                        <Link to='/'>
                            <a id='tituloPaginaNombreTexto' className="nav-link" className="navbar-brand" >Kalan</a>
                        </Link>

                    </div>


                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon">

                            <a href="#" className="navbar-brand ">
                                <img  id='logoInicio' src={logoInicio} alt="" className="mx-auto"

                                ></img>
                            </a>
                        </span>
                    </button>


                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div id='tituloPagina' className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <Link to='/'>

                                    <a className="nav-link" >KALAN</a>
                                    <img  id='logoInicio2' src={logoInicio} alt="" className="mx-auto"

                                ></img>
                                </Link></h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body" id='tituloPagina' >
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">

                                    <Link to='/Perfil'>
                                        <a className="nav-link" >Perfil (Strauss23)</a>

                                    </Link>

                                </li>
                                <li className="nav-item">
                                    <Link to='/Tutorial'>
                                        <a className="nav-link" >Preguntas Frequentes</a>
                                    </Link>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link to='/Tips'>
                                        <a className="nav-link" >Manejo de Finanzas</a>

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
