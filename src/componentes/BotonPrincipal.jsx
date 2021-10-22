import React from 'react'

const BotonPrincipal = () => {
    return (
        <div>
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
    )
}

export default BotonPrincipal
