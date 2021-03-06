import React from 'react'
import metasIMG from '../componentes/img/metas.png'
import ingresosIMG from '../componentes/img/ingresos.png'
import DivideGastosIMG from '../componentes/img/DivideGastos.png';
import GastosFijosIMG from "../componentes/img/gastosFijos.png";
import GastosVariablesIMG from "../componentes/img/gastosVariables.png";
import GastosIMG from "../componentes/img/gastos.png";
import BalanceIMG from "../componentes/img/Balance.png";
import PriorizaGastos from "../componentes/img/PriorizaGastos.png"
import PresupuestoIMG from "../componentes/img/presupuesto.png"
import limitesIMG from "../componentes/img/limites.png"


import {Link} from "react-router-dom";

const ManejoFinanzas = () => {

    //style={{ width: '18rem' }}

    return (
        <div id='SeccionFinanzas' className="container">

            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div className="col">
                    <Link to='/Tips/Metas'>
                        <a href={metasIMG} >
                            <img id='ImagenFinanzas' src={metasIMG} alt="Goals" className="rounded-circle" width="160" height="160"></img></a>
                    </Link>
                    <h5>Metas Financieras.</h5>
                    <p className="font-weight-light mb-0">"Establece metas a corto, mediano y largo plazo"</p>
                </div>
                <div className="col">
                    <Link to='/Tips/Ingresos'>
                        <a href={metasIMG} >
                            <img id='ImagenFinanzas' src={ingresosIMG} alt="ING" className="rounded-circle" width="160" height="160" ></img></a>
                    </Link>

                    <h5>Identifica ingresos.</h5>
                    <p className="font-weight-light mb-0">"Podras poner especial atención a actividades que ye hacen obtener dinero"</p>
                </div>
                <div className="col">
                    <Link to='/Tips/ListaTusGastos'>
                        <a href={metasIMG} >
                        <img id='ImagenFinanzas' src={GastosIMG} className="rounded-circle" alt="Goals" width="160" height="160"></img></a>
                    </Link>
                    
                    <h5>Lista tus gastos.</h5>
                    <p className="font-weight-light mb-0">"Identifica gastos inecesarios"</p>
                </div>
                <div className="col"><img id='ImagenFinanzas' src={DivideGastosIMG} className="rounded-circle" alt="Goals" width="160" height="160"></img>
                    <h5>Divide gastos</h5>
                    <p className="font-weight-light mb-0">"Divide gastos fijos y variables"</p>
                </div>
                <div className="col">
                    <img id='ImagenFinanzas' src={GastosFijosIMG} className="rounded-circle" alt="Goals" width="160" height="160" ></img>
                    <h5>Gastos fijos.</h5>
                    <p className="font-weight-light mb-0">"Identifica si es posible ahorrar en ellos y eliminalos"</p>
                </div>
                <div className="col"><img id='ImagenFinanzas' src={GastosVariablesIMG} className="rounded-circle" alt="Goals" width="160" height="160"></img>
                    <h5>Gastos variables</h5>
                    <p className="font-weight-light mb-0">"Elimina gastos no necesarios para subsistir"</p>
                </div>


                <div className="col"><img id='ImagenFinanzas' src={BalanceIMG} className="rounded-circle" alt="Goals" width="160" height="160"></img>
                    <h5>Balance positivo</h5>
                    <p className="font-weight-light mb-0">"Analiza si tus gastos son menores o iguales a tus ingresos"</p>
                </div>
                <div className="col"><img id='ImagenFinanzas' src={PriorizaGastos} className="rounded-circle" alt="Goals" width="160" height="160"></img>
                    <h5>Prioriza gastos</h5>
                    <p className="font-weight-light mb-0">"Paga gastos fijos sobre gastos variables"</p>
                </div>
                <div className="col"><img id='ImagenFinanzas' src={PresupuestoIMG} className="rounded-circle" alt="Goals" width="160" height="160"></img>
                    <h5>Presupuesto mensual</h5>
                    <p className="font-weight-light mb-0">"Alinea presupuesto mensual con tus metas"</p>
                </div>
                <div className="col"><img id='ImagenFinanzas' src={limitesIMG} className="rounded-circle" alt="Goals" width="160" height="160"></img>
                    <h5>Establece limites</h5>
                    <p className="font-weight-light mb-0">"Si algún gasto o actividad se sale de tu presupuesto, evítalo por completo."</p>
                </div>
            </div>
        </div>





    )
}

export default ManejoFinanzas
