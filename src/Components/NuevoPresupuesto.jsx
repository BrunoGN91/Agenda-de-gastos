import React, {useState} from 'react'
import MensajeError from './MensajeError'


const NuevoPresupuesto = ({setIsValid, presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()
        if(!presupuesto || presupuesto < 0){
            setMensaje("No")
            return
        } 

        setMensaje("")
        setIsValid(true)
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>
                <input 
                value={presupuesto}
                type="number"
                className='nuevo-presupuesto'
                placeholder='Añade tu presupuesto'
                onChange={(e) => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input
            onClick={handlePresupuesto} 
            type="submit"
            value="añadir"
             />
             {mensaje && <MensajeError tipo='error'>No es un presupuesto valido</MensajeError>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto