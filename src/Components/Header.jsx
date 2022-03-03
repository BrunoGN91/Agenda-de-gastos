import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({isValid, setIsValid, presupuesto, setPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        {isValid ? 
        
        <ControlPresupuesto
            presupuesto={presupuesto}
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