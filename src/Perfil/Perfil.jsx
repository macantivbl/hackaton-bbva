import React from 'react'

import Moneda from '../componentes/img/MonedaG.gif'
import Coin from '../componentes/img/coin.png'
import profPic1 from '../componentes/img/profPic1.gif'
import profPic2 from '../componentes/img/profPic2.gif'
import profPic3 from '../componentes/img/profPic3.gif'
import profPic4 from '../componentes/img/profPic4.gif'

import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'



const Perfil = (props) => {
    const [user,setUser] = React.useState(null)
    React.useEffect(()=>{
        if (auth.currentUser) {
            console.log('usuario exite');
            setUser(auth.currentUser)
        } else {
            console.log('no exite el usuraio');
            props.history.push('/Registro')
        }   
    },[props.history])

    function changePhoto(sw) {
        var pic;
        if (sw == 0) {
            pic = profPic1;
        } else if (sw == 1) {
            pic = profPic2;
        } else if (sw == 2) {
            pic = profPic3;
        } else {
            pic = profPic4;
        }
        document.getElementById("section1").src = pic;
    }



    const cambioDeNivel = () => {
        document.getElementById("anim1").style.background = "#D4EDFC";
        document.getElementById("anim2").style.background = "#5BBEFF";
        document.getElementById("anim3").style.background = "#49A5E6";
        document.getElementById("anim4").style.background = "#1973B8";
        document.getElementById("anim5").style.background = "#1464A5";
        document.getElementById("anim6").style.background = "#043263";

        document.getElementById("barraProg").style.background = "#5BBEFF";
        document.getElementById("barraProg2").style.background = "#5BBEFF";
        document.getElementById("barraProg3").style.background = "#5BBEFF";

        changePhoto(0);

        document.getElementById("med3").style.visibility = "visible";
        document.getElementById("med4").style.visibility = "visible";
        document.getElementById("med5").style.visibility = "visible";
        document.getElementById("med6").style.visibility = "visible";



    }

    const cambioDeNivel2 = () => {
        document.getElementById("anim1").style.background = "#b2e6e9";
        document.getElementById("anim2").style.background = "#2dcccd";
        document.getElementById("anim3").style.background = "#21c1c2 ";
        document.getElementById("anim4").style.background = "#00B0B9";
        document.getElementById("anim5").style.background = "#02a5a5";
        document.getElementById("anim6").style.background = "#028484";

        document.getElementById("barraProg").style.background = "#2dcccd";
        document.getElementById("barraProg2").style.background = "#2dcccd";
        document.getElementById("barraProg3").style.background = "#2dcccd";

        changePhoto(1);
        document.getElementById("med3").style.visibility = "visible";
        document.getElementById("med4").style.visibility = "visible";
        document.getElementById("med5").style.visibility = "visible";
        document.getElementById("med6").style.visibility = "visible";
    }

    const cambioDeNivel3 = () => {

        document.getElementById("anim1").style.background = "#FDE7D8";
        document.getElementById("anim2").style.background = "#FAB27F";
        document.getElementById("anim3").style.background = "#F7893B ";
        document.getElementById("anim4").style.background = "#D8732C";
        document.getElementById("anim5").style.background = "#d56414";
        document.getElementById("anim6").style.background = "#C65302";

        document.getElementById("barraProg").style.background = "#F7893B";
        document.getElementById("barraProg2").style.background = "#F7893B";
        document.getElementById("barraProg3").style.background = "#F7893B";

        changePhoto(2);

        document.getElementById("med3").style.visibility = "hidden";
        document.getElementById("med4").style.visibility = "hidden";
        document.getElementById("med5").style.visibility = "hidden";
        document.getElementById("med6").style.visibility = "hidden";
    }

    return (
        <div>

            <div id='ClassOscarDiv' className="col" >
                <div className="card-body text-center">
                    <img id="section1"></img>
                </div>

                <div className="card-header py-3">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <p
                                id='ClassOscarP'
                                className="m-0 fw-bold"
                            >
                                <b> Strauss23</b>
                            </p>
                            <p id='ClassOscarP2'>
                                (PIN) 752-923-WKF
                            </p>
                            <br />
                        </div>
                    </div>
                </div>

                <div className="progress">
                    <div
                        id='ClassOscarDiv2'
                        className="progress-bar bg-warning progress-bar-striped"
                    ></div>
                </div>
            </div>

            <p id='ClassOscarP3'>
                Experiencia Financiera (40%)
            </p>

            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="col">
                        <div id="section1" className="container-fluid"></div>
                        <br />
                        <br />

                        <div className="card shadow">
                            <div className="card-header py-1">
                                <p className="text-secondary m-1 fw-bold text-center fs-3">Niveles</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <img src={Moneda} alt="" />
                                        <img src="./White.PNG" alt="" />
                                        <button
                                            id="BtnN1"
                                            onClick={() => { cambioDeNivel() }}
                                            className="btn btn-primary btn-lg me-2"
                                            type="button"
                                        >
                                            Nivel 1
                                        </button>
                                        <button
                                            id="BtnN2"
                                            onClick={() => { cambioDeNivel2() }}
                                            className="btn btn-primary btn-lg me-2"
                                            type="button"

                                        >
                                            Nivel 2
                                        </button>
                                        <button
                                            id="BtnN5"
                                            onClick={() => { cambioDeNivel3() }}
                                            className="btn btn-primary btn-lg me-2"
                                            type="button"

                                        >
                                            Nivel 3
                                        </button>



                                        <button
                                            id="BtnN3"
                                            className="btn btn-primary btn-lg me-2"
                                            type="button"
                                            data-bs-toggle="popover"
                                            title="Continúa cultivando buenos hábitos financieros "
                                            data-bs-content="Lo sentimos. Necesitas más experiencia para acceder a este nivel."

                                        >
                                            Nivel 4
                                        </button>
                                        <button
                                            id="BtnN4"
                                            className="btn btn-primary btn-lg"

                                            type="button"
                                            data-bs-toggle="popover"
                                            title="La constancia en el ahorro dará frutos"
                                            data-bs-content="Lo sentimos. Necesitas más experiencia para acceder a este nivel."

                                        >
                                            Nivel 5
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-0"></div>

                <div
                    className="col-10 align-content-center text-center"
                >

                    <br />
                    <br />

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="progress progress-bar-animated progress-bar-striped">
                                <div
                                    id="barraProg"
                                    className="progress-bar progress-bar-animated"

                                ></div>
                            </div>
                            <h6 id="OscarH6" >
                                Vacaciones
                            </h6>
                            <br />
                            <div className="progress progress-bar-animated progress-bar-striped">
                                <div
                                    id="barraProg2"
                                    className="progress-bar progress-bar-animated"

                                ></div>
                            </div>

                            <h6 id='OscarH6'>
                                Universidad
                            </h6>
                            <br />
                            <div className="progress progress-bar-animated progress-bar-striped">
                                <div
                                    id="barraProg3"
                                    className="progress-bar progress-bar-animated"

                                ></div>
                            </div>
                            <h6 id='OscarH6'>
                                Salud
                            </h6>
                        </div>
                    </div>


                    <div id="montos" className="row" >
                        <h4><b>Monto Acumulado</b> = $4,988.50 MXN</h4>
                        
                        
                        <h4 id="OscarH4" ><b>Mejora tu salud financiera</b></h4>
                        <h3 id="OscarH3">Completado</h3>
                        <br />
                        <br />
                    </div>
                    <div className="row-3">
                        <div id="anim1" className="mesUno box bounce-8">
                            <img src={Coin} alt="" className="bounce-8" />
                            <br />
                            <img src={Moneda} alt="" />
                        </div>

                        <div id="anim2" className="mesDos box bounce-8">
                            <img src={Coin} alt="" className="bounce-8" />
                            <br />
                            <img src={Moneda} alt="" />
                        </div>

                        <div id="anim3" className="mesTres box bounce-8">
                            <img src={Coin} alt="" className="bounce-8" />
                            <br />
                            <img id="med3" src={Moneda} alt="" />
                        </div>

                        <div id="anim4" className="mesCuatro box bounce-7">
                            <img src={Coin} alt="" className="bounce-7" />
                            <br />
                            <img id="med4" src={Moneda} alt="" />
                        </div>

                        <div id="anim5" className="mesCinco box bounce-7">
                            <img src={Coin} alt="" className="bounce-7" />
                            <br />
                            <img id="med5" src={Moneda} alt="" />
                        </div>

                        <div id="anim6" className="mesSeis box bounce-7">
                            <img src={Coin} alt="" className="bounce-7" />
                            <br />
                            <img id="med6" src={Moneda} alt="" />
                        </div>
                    </div>

                </div>
            </div>



        </div>


    )
}

export default withRouter(Perfil)
