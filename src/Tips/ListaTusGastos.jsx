import React from 'react'
import DivideGastosIMG from '../componentes/img/gastos.png';

const ListaTusGastos = () => {
    const [estadoRespuesta, setEstadoRespuesta] = React.useState(1)
    return (
        <div id='SeccionRegistro' className='Container'>
            <div className="row align-items-center">
                <div className="col-1"></div>
                <div className="col">
                    <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
                        <img src={DivideGastosIMG} className="card-img-top" alt="metasIMG"></img>
                        <div className="card-header"></div>
                        <div className="card-body">
                            <h5 className="card-title">Lista Tus Gastos</h5>
                            <p className="card-text">
                            Conocer tus gastos e ingresos te permite fijar 
                            un presupuesto y consolidar tus activos. Aprovecha 
                            el poder de ahorrar con interés compuesto.

                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">

                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </symbol>
                        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </symbol>
                        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </symbol>
                    </svg>

                    <h1>¿Qué es el interés?</h1>


                    <div className="alert alert-info" role="alert">
                        <form>
                            <div className="form-check">
                                <input onClick={() => setEstadoRespuesta(3)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Es una deuda.
                                </label>
                            </div>
                            <hr />
                            <div className="form-check">
                                <input onClick={() => setEstadoRespuesta(3)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Es el capital de un negocio.
                                </label>
                            </div>
                            <hr />
                            <div className="form-check">
                                <input onClick={() => setEstadoRespuesta(3)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Una garantía colateral.
                                </label>
                            </div>
                            <hr />
                            <div className="form-check">
                                <input onClick={() => setEstadoRespuesta(2)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" ></input>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                El interés es el costo de pedir dinero prestado, 
                                donde el prestatario paga una tarifa al prestamista por el préstamo. 
                                </label>
                            </div>
                            <hr />
                        </form>

                        {estadoRespuesta === 1 ? null :
                            estadoRespuesta === 2 ?
                                <div id='alertaRespuesta' >
                                    <div className="alert alert-success d-flex align-items-center" role="alert">
                                        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"> <use xlinkHref="#check-circle-fill" /></svg>
                                        <div>
                                        CORRECTA. 
                                        ¡Felicidades, has contestado de manera acertada! Si acumulas cierto capital, 
                                        tu puedes generar intereses sobre el mismo en forma de rendimientos.
                                        </div>
                                    </div>
                                </div> :

                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill" /></svg>
                                    <div>
                                    ¡Intenta de nuevo!
                                    </div>
                                </div>

                        }


                    </div>
                </div>

                <div className="col-1"></div>

            </div>
        </div>


    )
}

export default ListaTusGastos
