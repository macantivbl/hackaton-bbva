import React, { useState } from 'react'

import { CSSTransition } from 'react-transition-group';
import imagenParty from '../componentes/img/party.png'

const SobreNosotros = () => {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    const [showButton2, setShowButton2] = useState(true);
    const [showMessage2, setShowMessage2] = useState(false);

    const [showButton3, setShowButton3] = useState(true);
    const [showMessage3, setShowMessage3] = useState(false);

    const [showButton4, setShowButton4] = useState(true);
    const [showMessage4, setShowMessage4] = useState(false);


    return (

        <div id='SeccionRegistro' className='container'>
            <hr />

            <h1 className="animate__animated animate__zoomIn">Preguntas Frequentes</h1>
            <hr />

            <div className='container' style={{ paddingTop: '2rem' }}>
                {showButton && (
                    <button class="btn btn-outline-success" type="button"
                        onClick={() => setShowMessage(true)}
                        size="lg"
                    >
                        ¿Qué es Kalan?
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
                        <h4 className="alert-heading">¿Qué es Kalan?</h4>
                        <p>Kalan es proteger en maya. Kalan protege la salud financiera de los usuarios,
                            estableciendo una trayectoria financiera saludable para cada persona.
                            Del ahorro a la inversión, apoyamos a convertir sueños en metas realizables.
                        </p>

                        <img src={imagenParty} alt="Bootstrap" width="32" height="32"></img>
                        <hr></hr>


                        <button className="btn btn-outline-success" type="button"
                            onClick={() => setShowMessage(false)}
                            style={{ margin: '.5rem' }}
                        >
                            Cerrar
                        </button>
                    </div>
                </CSSTransition>
            </div>


            <div className='container' style={{ paddingTop: '2rem' }}>
                {showButton2 && (
                    <button class="btn btn-outline-success" type="button"
                        onClick={() => setShowMessage2(true)}
                        size="lg"
                    >
                        2. ¿Cómo funciona Kalan?
                    </button>
                )}

                <CSSTransition
                    in={showMessage2}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setShowButton2(false)}
                    onExited={() => setShowButton2(true)}
                >
                    <div className="alert alert-info"role="alert">
                        <h4 className="alert-heading">¿Cómo funciona Kalan?</h4>
                        <p>A través de un juego dinámico por niveles, los usuarios de Kalan pueden fortalecer su patrimonio. Adquiriendo capital cultural y financiero, cada usuario aprende sobre ahorro, inversiones y salud económica.

                        </p>

                        <img src={imagenParty} alt="Bootstrap" width="32" height="32"></img>
                        <hr></hr>


                        <button className="btn btn-outline-success" type="button"
                            onClick={() => setShowMessage2(false)}
                            style={{ margin: '.5rem' }}
                        >
                            Cerrar
                        </button>
                    </div>
                </CSSTransition>
            </div>

            <div className='container' style={{ paddingTop: '2rem' }}>
                {showButton3 && (
                    <button class="btn btn-outline-success" type="button"
                        onClick={() => setShowMessage3(true)}
                        size="lg"
                    >
                        3. ¿Qué marca la diferencia sobre otros intermediarios financieros?
                    </button>
                )}

                <CSSTransition
                    in={showMessage3}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setShowButton3(false)}
                    onExited={() => setShowButton3(true)}
                >
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">3. ¿Qué marca la diferencia sobre otros intermediarios financieros?</h4>
                        <p>Accesibilidad para acompañar a los usarios a cumplir sus propósitos financiero. Trazamos una estrategia de ahorro e inversión para cumplir los objetivos financieros del usuario, a cualquier plazo de tiempo.
                        </p>

                        <img src={imagenParty} alt="Bootstrap" width="32" height="32"></img>
                        <hr></hr>


                        <button className="btn btn-outline-success" type="button"
                            onClick={() => setShowMessage3(false)}
                            style={{ margin: '.5rem' }}
                        >
                            Cerrar
                        </button>
                    </div>
                </CSSTransition>
            </div>

            <div className='container' style={{ paddingTop: '2rem' }}>
                {showButton4 && (
                    <button class="btn btn-outline-success" type="button"
                        onClick={() => setShowMessage4(true)}
                        size="lg"
                    >
                        4. ¿Quién puede unirse a Kalan?
                    </button>
                )}

                <CSSTransition
                    in={showMessage4}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setShowButton4(false)}
                    onExited={() => setShowButton4(true)}
                >
                    <div className="alert alert-info" role="alert">
                        <h4 className="alert-heading">4. ¿Quién puede unirse a Kalan?</h4>
                        <p>Cualquier persona que desee ahorrar y fortalecer su capital financiero mediante objetivos accesibles e inclusivos.</p>

                        <img src={imagenParty} alt="Bootstrap" width="32" height="32"></img>
                        <hr></hr>


                        <button className="btn btn-outline-success" type="button"
                            onClick={() => setShowMessage4(false)}
                            style={{ margin: '.5rem' }}
                        >
                            Cerrar
                        </button>
                    </div>
                </CSSTransition>
            </div>
        </div>
    )
}

export default SobreNosotros

