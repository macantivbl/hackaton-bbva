import React from 'react'
import { Link } from 'react-router-dom'
import Imagen from '../componentes/img/opcion4.png'
const Registro = () => {
    return (
        <div id='CuerpoPerfil'>

            <div className="container">
                <section id='DianaSeccion' className="text-center">
                    <div className="container my-3 text-center ">
                        <h1 id='DianaH1' className="mb-1">
                            <Link to='/'>
                                KALAN
                            </Link>
                        </h1>
                        <h3 id='DianaH3' className="mb-5"><em>"Empieza tu trayectoria en Kalan"</em></h3>
                        <div className="overlay"></div>
                    </div>
                </section>

            </div>

            <span className="border border-primary">
                <div className='container'>

                    <div className="row align-items-center">
                        <div className="col">
                            <img id='imagenDiana' src={Imagen} className="img-fluid" alt="Login"></img>
                        </div>

                        <div id='FormularioDiana' className='col'>
                            <div className="text-center">
                                <h4 className="text-dark mb-4">Bienvenido de regreso!</h4>
                            </div>

                            <form className="user">

                                <div className="mb-3">
                                    <input className="form-control form-control-user"
                                        type="email" id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Ingresa tu dirección de correo" name="email">
                                    </input>
                                </div>

                                <div className="mb-3">
                                    <input className="form-control form-control-user"
                                        type="password" id="exampleInputPassword"
                                        placeholder="Contraseña" name="password">
                                    </input>
                                </div>


                                <div className="mb-3">
                                    <div className="custom-control custom-checkbox small">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input custom-control-input"
                                                type="checkbox" id="formCheck-1">
                                            </input>
                                            <label
                                                className="form-check-label custom-control-label"
                                                htmlFor="formCheck-1">
                                                Recuerdame
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <hr />
                                <button type="button" className="btn btn-outline-success">
                                   
                                    Inicia sesión
                                </button>


                                <hr />
                                <div className="container">
                                    <a className="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                                        role="button"><i className="fab fa-google"></i>&nbsp; Ingresa con
                                        Google</a>
                                    <a
                                        className="btn btn-primary d-block btn-facebook btn-user w-100"
                                        role="button"><i className="fab fa-facebook-f"></i>&nbsp; Ingresa con
                                        Facebook</a>
                                </div>



                            </form>

                        </div>
                    </div>


                </div>
            </span>

        </div>
    )
}

export default Registro
