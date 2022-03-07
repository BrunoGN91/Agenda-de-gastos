import React, {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
const ControlPresupuesto = ({ 
    gastos, 
    setGastos, 
    presupuesto,
    setPresupuesto,
    setIsValid }) => {

    const [totalGastos, setTotalGastos] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);


useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado
       setDisponible(totalDisponible)
       setTotalGastos(totalGastado)

       const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto * 100).toFixed(2)
       setTimeout(() => {
        setPorcentaje(nuevoPorcentaje)
       }, 600)
       
}, [gastos])

const handleResetApp = () => {
    const resultado = confirm('Estas Seguro que queres borrar el Listado de Gastos?')
    if(resultado) {
        setGastos([])
        setPresupuesto(0);
        setIsValid(false)

    }

}
    
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: "USD"
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
            styles={buildStyles({
                pathColor:porcentaje > 100 ? '#DC2626' : '#3b82f6',
                textColor:porcentaje > 100 ? '#DC2626' : '#3b82f6'
            })}
            text={`${porcentaje} %`}
            value={porcentaje}>
                {porcentaje}
                </CircularProgressbar> 
        </div>

        <div className='contenido-presupuesto'>
            <button
             type='button'
             onClick={handleResetApp}
             className='reset-app'>
                Resetear App
            </button>
            <p>
                <span>Presupuesto</span> {formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible</span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado</span> {formatearCantidad(totalGastos)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto