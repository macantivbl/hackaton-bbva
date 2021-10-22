import React from 'react'

const BarraNabegacion = () => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand" id="sidebar-wrapper">
                <div className="container">
                    <button
                        data-bs-toggle="collapse"
                        className="navbar-toggler d-none"
                        data-bs-target="#"
                    ></button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav sidebar-nav" id="sidebar-nav">
                            <li className="nav-item sidebar-brand">
                                <a className="nav-link active js-scroll-trigger" href="#page-top"
                                >Brand</a
                                >
                            </li>
                            <li className="nav-item sidebar-nav-item">
                                <a className="nav-link js-scroll-trigger" href="#page-top">Home</a>
                            </li>
                            <li className="nav-item sidebar-nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item sidebar-nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services"
                                >Services</a
                                >
                            </li>
                            <li className="nav-item sidebar-nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio"
                                >Portfolio</a
                                >
                            </li>
                            <li className="nav-item sidebar-nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default BarraNabegacion
