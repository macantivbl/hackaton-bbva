import React, { useState } from 'react'

import { CSSTransition } from 'react-transition-group';
import imagenParty from '../componentes/img/party.png'

const PoppersEjem = () => {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    return (

        <div className='container'>
            <hr />

            <h1 className="animate__animated animate__zoomIn">An animated element</h1>
            <hr />

            <div className='container' style={{ paddingTop: '2rem' }}>
                {showButton && (
                    <button class="btn btn-outline-success" type="button"
                        onClick={() => setShowMessage(true)}
                        size="lg"
                    >
                        Invertir un Chingo
                    </button>
                )}
                <CSSTransition
                    in={showMessage}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setShowButton(false)}
                    onExited={() => setShowButton(true)}
                >
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Bien hecho!</h4>
                        <p>Felicitaciones tu buena decisión te ha otorgado 500 puntos</p>
                        <img src={imagenParty} alt="Bootstrap" width="32" height="32"></img>
                        <hr></hr>
                        <p className ="mb-0">Sigue de esta forma y seras millonario.... en 500 años</p>

                        <button className="btn btn-outline-success" type="button"
                            onClick={() => setShowMessage(false)} 
                            style={{ margin: '.5rem' }}
                            >
                            Close
                        </button>
                    </div>
                </CSSTransition>
            </div>
        </div>
    )
}

export default PoppersEjem
