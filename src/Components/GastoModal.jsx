import React, {useState} from 'react';
import MensajeError from './MensajeError';
import ImagenCross from"../img/cerrar.svg"

const GastoModal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if([nombre, cantidad, categoria].includes('')) {
           
            setMensaje("Todos los campos son obligatorios")
            return;
        }
        guardarGasto({nombre, categoria, mensaje})
    }


    const cerrarModal = () => {
        
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false);
        }, 500)
    }
  return (
    <div className='modal'>
        <div className='cerrar-modal cursor-pointer'>
            <img
            className='cursor-pointer' 
            onClick={cerrarModal}
            src={ImagenCross} alt="" />
        </div>

        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend> Nuego Gasto</legend>
            {mensaje && <MensajeError tipo='error'>Todos los campos son obligatorios</MensajeError>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input
                value={nombre}
                onChange={(e) => { setNombre(e.target.value)}}
                id="nombre" 
                placeholder='Añade el nombre del gasto'
                type="text" />
            </div>
            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input
                value={cantidad}
                onChange={(e) => {setCantidad(Number(e.target.value))}}
                id="cantidad" 
                placeholder='Añade la cantidad del gasto'
                type="number" />
            </div>
            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select
                id="categoria"
                value={categoria}
                onChange={(e) => { setCategoria(e.target.value)}}
                >
                        <option value="">Seleccionar</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="varios">Varios</option>
                </select>
            </div>
            <input type="submit" value="Añadir Gasto" />
        </form>
    </div>
  )
}

export default GastoModal