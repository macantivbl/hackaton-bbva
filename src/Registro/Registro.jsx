import React from 'react'
import { Link } from 'react-router-dom'
import Imagen from '../componentes/img/opcion4.png'
import { auth, db } from '../firebase'
import { withRouter } from 'react-router-dom'

const Registro = (props) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorLogin, setErrotLogin] = React.useState(null)
    const [esRegistro, setesRegistro] = React.useState(true)
    const [nombre,setNombre] = React.useState('')
    const [apellido,setApellido] = React.useState('')
    const [rfc,setRFC] = React.useState('')
    const [edad,setEdad] = React.useState('')
    
    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()) {

            setErrotLogin('ingrese Email')
            return
        }
        if (!password.trim()) {

            setErrotLogin('ingrese Password')
            return
        }
        if (password.length < 6) {

            setErrotLogin('constraseña debe ser mayor a 6 caracteres')
            return
        }

        setErrotLogin(null)

        if (esRegistro) {
            registrar()
        }else{
            LoginAcceso()
        }
    }

    const LoginAcceso = React.useCallback(async() => {
        try {
           const res =  await auth.signInWithEmailAndPassword(email, password)
           console.log(res.user);
           setEmail('')
           setNombre('')
           setApellido('')
           setEdad('')
           setRFC('')
           setPassword('')
           setErrotLogin(null)
           props.history.push('/Perfil')
        } catch (error) {
            if (error.code === 'auth/invalid-email')
                setErrotLogin('Email no valido')
            if(error.code === 'auth/user-not-found'){
                setErrotLogin('Email o contraseña no validos')
            }
            if(error.code === 'auth/wrong-password'){
                setErrotLogin('Email o contraseña no validos')
            }
            
            //setErrotLogin('error');
        }
    }, [email, password,props.history])

    const registrar = React.useCallback(async () => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password)
            await db.collection('hackaton-usuarios').doc(res.user.uid).set({
                email: res.user.email,
                uid: res.user.uid,
                nombre: nombre,
                apellido: apellido,
                edad: edad,
                rfc: rfc
            })
            setEmail('')
            setNombre('')
            setApellido('')
            setEdad('')
            setRFC('')
            setPassword('')
            setErrotLogin(null)
            console.log(res);
            props.history.push('/Perfil')
        } catch (error) {
            console.log(error);
            if (error.code === 'auth/invalid-email')
                setErrotLogin('Email no valido')
            if (error.code === 'auth/email-already-in-use')
                setErrotLogin('Este Email ya se encuentra registrado')
        }
    }, [email, password, props.history])

    return (
        <div id='CuerpoPerfil'>

            <div className="container">
                <section id='DianaSeccion' className="text-center">
                    <div className="container my-3 text-center ">
                        <h1 id='DianaH1' className="mb-1">
                            <Link to='/'>
                                KALAN
                            </Link>
                        </h1>
                        <h3 id='DianaH3' className="mb-5"><em>"Empieza tu trayectoria en Kalan"</em></h3>
                        <div className="overlay"></div>
                    </div>
                </section>

            </div>

            <span className="border border-primary">
                <div className='container'>

                    <div className="row align-items-center">
                        <div className="col">
                            <img id='imagenDiana' src={Imagen} className="img-fluid" alt="Login"></img>
                        </div>

                        <div id='FormularioDiana' className='col'>
                            <div className="text-center">
                                <h4 className="text-dark mb-4">
                                    {
                                        esRegistro ? 'Registro de Usuarios' : 'Bienvenido de regreso!'
                                    }
                                </h4>
                            </div>

                            {
                                esRegistro ?

                                    <form className="user"
                                        onSubmit={procesarDatos}
                                    >
                                        {
                                            errorLogin && (
                                                <div className="alert alert-danger">{errorLogin}</div>
                                            )
                                        }

                                        <div className="mb-3">
                                            <input className="form-control form-control-user"
                                                type="email" id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Ingresa tu dirección de correo" name="email"
                                                onChange={e => setEmail(e.target.value)}
                                                value={email}
                                            >
                                            </input>
                                        </div>

                                        <div className="mb-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon3">Nombre</span>
                                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                                                    onChange={e => setNombre(e.target.value)}
                                                    value={nombre}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon3">Apellidos</span>
                                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                                                    onChange={e => setApellido(e.target.value)}
                                                    value={apellido}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon3">Edad</span>
                                                <input type="number" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                                                    onChange={e => setEdad(e.target.value)}
                                                    value={edad}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon3">RFC</span>
                                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                                                    onChange={e => setRFC(e.target.value)}
                                                    value={rfc}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <input className="form-control form-control-user"
                                                type="password" id="exampleInputPassword"
                                                placeholder="Contraseña" name="password"
                                                onChange={e => setPassword(e.target.value)}
                                                value={password}
                                            >
                                            </input>
                                        </div>


                                        

                                        <hr />
                                        <button type="submit" className="btn btn-success">

                                            Crear Usuario
                                        </button>


                                        <hr />
                                        <div className="container">
                                            <button type="button" className="btn btn-primary btn-lg"
                                                type='button'
                                                onClick={() => setesRegistro(!esRegistro)}
                                            >
                                                {
                                                    esRegistro ? 'Ya tengo cuenta' : 'Crear una cuenta'
                                                }
                                            </button>

                                        </div>



                                    </form> :


                                    <form className="user"
                                        onSubmit={procesarDatos}
                                    >
                                        {
                                            errorLogin && (
                                                <div className="alert alert-danger">{errorLogin}</div>
                                            )
                                        }

                                        <div className="mb-3">
                                            <input className="form-control form-control-user"
                                                type="email" id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Ingresa tu dirección de correo" name="email"
                                                onChange={e => setEmail(e.target.value)}
                                                value={email}
                                            >
                                            </input>
                                        </div>

                                        <div className="mb-3">
                                            <input className="form-control form-control-user"
                                                type="password" id="exampleInputPassword"
                                                placeholder="Contraseña" name="password"
                                                onChange={e => setPassword(e.target.value)}
                                                value={password}
                                            >
                                            </input>
                                        </div>


                                        <div className="mb-3">
                                            <div className="custom-control custom-checkbox small">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input custom-control-input"
                                                        type="checkbox" id="formCheck-1">
                                                    </input>
                                                    <label
                                                        className="form-check-label custom-control-label"
                                                        htmlFor="formCheck-1">
                                                        Recuerdame
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                        <button type="submit" className="btn btn-success">

                                            Iniciar Sesion
                                        </button>


                                        <hr />
                                        <div className="container">
                                            <button type="button" className="btn btn-primary btn-lg"
                                                type='button'
                                                onClick={() => setesRegistro(!esRegistro)}
                                            >
                                                {
                                                    esRegistro ? 'Ya tengo cuenta' : 'Crear una cuenta'
                                                }
                                            </button>

                                        </div>



                                    </form>

                            }
                        </div>
                    </div>


                </div>
            </span>

        </div>
    )
}

export default withRouter(Registro)
