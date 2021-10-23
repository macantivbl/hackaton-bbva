import React from 'react'
import diferencia from './img/1.jpg'
import estrategia from './img/2.jpg'
import inversion from './img/3.jpg'
import inversion2 from './img/4.jpg'


const Carrusel = () => {
    return (
        <div className='container'>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={diferencia} class="d-block w-100" alt="..."></img>
                        <div class ="carousel-caption d-none d-md-block">
                        
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={estrategia} class="d-block w-100" alt="..."></img>
                        <div class ="carousel-caption d-none d-md-block">
                        
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={inversion} class="d-block w-100" alt="..."></img>
                        <div class ="carousel-caption d-none d-md-block">
                        
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={inversion2} class="d-block w-100" alt="..."></img>
                        <div class ="carousel-caption d-none d-md-block">
                        
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Carrusel
