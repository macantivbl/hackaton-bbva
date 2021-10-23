import React from 'react'
import diferencia from './img/1.jpg'
import estrategia from './img/2.jpg'
import inversion from './img/3.jpg'
import inversion2 from './img/4.jpg'


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

            

        </div>
    )
}

export default Carrusel
