import React from 'react'
import diferencia from './img/1.png'
import estrategia from './img/2.png'
import inversion from './img/3.png'
import inversion2 from './img/4.png'
import est1 from './img/est1.png'
import est2 from './img/est2.png'
import est3 from './img/est3.png'
import est4 from './img/est4.png'
import est5 from './img/est5.png'



const Carrusel = () => {
    return (
        <div id="carruselStyle" className='container'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                <div className="carousel-inner">


                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={diferencia} className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={estrategia} className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={inversion} className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={inversion2} className="d-block w-100" alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">

                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                    <h1 className=" mb-4 text-center ">Top 10</h1>
                    <div className="card shadow ">
                        <div id='cardDiana' className="card-header py-3 ">
                            <p style={{fontSize: '30px'}}>Las mejores puntuaciones</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 ">
                                </div>
                            </div>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>Posición</th>
                                            <th>Usuario</th>
                                            <th>Puntos</th>
                                            <th>Nivel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est4}></img>1</td>
                                            <td>Atomic_wombat</td>
                                            <td>9378</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est4}></img>2</td>
                                            <td>Stratus23</td>
                                            <td>8589</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est3}></img>3</td>
                                            <td>Macanti</td>
                                            <td>8381</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est3}></img>4</td>
                                            <td>Rawl</td>
                                            <td>7076</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est3}></img>5</td>
                                            <td>Mebla2</td>
                                            <td>6746</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est5}></img>6</td>
                                            <td>Elegante</td>
                                            <td>6198</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est5}></img>7</td>
                                            <td>Star66</td>
                                            <td>4423</td>
                                            <td>3</td>
                                                                                    
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est2}></img>8</td>
                                            <td>Black86</td>
                                            <td>2864</td>
                                            <td>2</td>                
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est1}></img>9</td>
                                            <td>Flor14</td>
                                            <td>966</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle me-2" width="30" height="30" src={est1}></img>10</td>
                                            <td>So_3</td>
                                            <td>121</td>
                                            <td>1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            

        </div>
    )
}

export default Carrusel
