import React from 'react'
import BarraNabegacion from '../componentes/BarraNabegacion'


const Perfil = () => {
    return (
        

        <div id='bodyPerfil'>
            
            <div
                className="mesUno box"
                data-anijs="if: load, on:window, do: bounceInDown animated; if: mousemove, do: shake animated"
            >
                <img
                    src="./coin.png"
                    alt=""
                    data-anijs="if: load, on:window, do: bounceInDown animated"
                />
            </div>

            <div
                className="mesDos box"
                data-anijs="if: load, on:window, do: bounceInDown animated; if: mousemove, do: wobble animated"
            >
                <img
                    src="./coin.png"
                    alt=""
                    data-anijs="if: load, on:window, do: bounceInDown animated"
                />
            </div>

            <div
                className="mesTres box"
                data-anijs="if: load, on:window, do: bounceInDown animated; if: mousemove, do: flash animated"
            >
                <img
                    src="./coin.png"
                    alt=""
                    data-anijs="if: load, on:window, do: bounceInDown animated"
                />
            </div>

            <div
                className="mesCuatro box"
                data-anijs="if: load, on:window, do: bounceInUp animated; if: mousemove, do: rubberBand animated"
            >
                <img
                    src="./coin.png"
                    alt=""
                    data-anijs="if: load, on:window, do: bounceInUp animated"
                />
            </div>

            <div
                className="mesCinco box"
                data-anijs="if: load, on:window, do: bounceInUp animated; if: mouseover, do: tada animated"
            >
                <img
                    src="./coin.png"
                    alt=""
                    data-anijs="if: load, on:window, do: bounceInUp animated"
                />
            </div>

            <div
                className="mesSeis box"
                data-anijs="if: load, on:window, do: bounceInUp animated;if: mouseover, do: flip animated"
            >
                <img
                    src="./coin.png"
                    alt=""
                    data-anijs="if: load, on:window, do: bounceInUp animated"
                />
            </div>
            
        </div>
    )
}

export default Perfil
