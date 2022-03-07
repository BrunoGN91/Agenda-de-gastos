import React, {useState, useEffect} from 'react';
import { formatearFecha } from "../herlpers";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoVarios from '../img/icono_gastos.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos ={
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  varios: IconoVarios,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
  ocio: IconoOcio
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
  const {nombre, cantidad, categoria, fecha} = gasto

  
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
      Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
      onClick={() => {eliminarGasto(gasto.id)}}
      destructive={true}>
     Eliminar
      </SwipeAction>
  </TrailingActions>
  )


  


  return (
    <SwipeableList>
      <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
      >
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img src={diccionarioIconos[categoria]} alt="" />
        <div className='descripcion-gasto'>
          <p className='categoria'>{categoria}</p>
            <p className='nombre-gasto'>{nombre}</p>
            <p className='cantidad-gasto'>
              Agregado el {''}
              <span>{formatearFecha(fecha)}</span>
             
              </p>
          </div>
      </div>
    <p className='cantidad-gasto'>$ {cantidad}</p>
    </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto