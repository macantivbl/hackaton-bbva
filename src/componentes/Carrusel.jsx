import React from 'react'
import diferencia from './img/diferencia-inversion-ahorro.jpg'
import estrategia from './img/Fondos-Estrategia-BBVA.jpg'
import inversion from './img/fondos-inversion-bancomer.png'

const Carrusel = () => {
    return (
        <div>
            <div id="carouselMainPage" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselMainPage"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselMainPage"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselMainPage"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            title="image"
                            src={diferencia}
                            className="mx-auto d-block"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            title="image"
                            src={estrategia}
                            className="mx-auto d-block"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            title="image"
                            src={inversion}
                            className="mx-auto d-block"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselMainPage"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselMainPage"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Carrusel
