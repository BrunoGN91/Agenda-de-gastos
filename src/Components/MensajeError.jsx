import React from 'react'

function MensajeError({children, tipo}) {
  return (
    <div className={`alerta ${tipo}`}>
        {children}
    </div>
  )
}

export default MensajeError