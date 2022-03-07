import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
  setGastoEditar, 
  isValid, 
  setIsValid, 
  presupuesto, 
  setPresupuesto, 
  gastos, 
  setGastos}) => {


  return (
    <header>
        <h1>Planificador de gastos</h1>
        {isValid ? 
        
        <ControlPresupuesto
        setIsValid={setIsValid}
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        /> : (

        <NuevoPresupuesto
            setIsValid={setIsValid}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            />

        )}
        
    </header>
  )
}

export default Header