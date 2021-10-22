import React from "react";
import { firebase } from './firebase'



const Ejemplo = () => {

    const [BaseDatos, setBaseDatos] = React.useState([])

    React.useEffect(() => {

        const obtenerDatos = async () => {
    
          try {
            const db = firebase.firestore()
            const data = await db.collection('hackaton').get()
            //Peticion  datos 
            const arrayData = data.docs.map(doc => (
              {
                id: doc.id,
                ...doc.data()
              }
            ))
            setBaseDatos(arrayData)
            console.log(BaseDatos);
          } catch (error) {
            console.log(error);
          }
    
        }
    
    
        obtenerDatos()
      }, [])

    return (
        <div>
            <h1>Hola 123445</h1>

        </div>
    )
}

export default Ejemplo
