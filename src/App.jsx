import { useState, useEffect } from 'react'
import Filtros from "./Components/Filtros"
import Header from './Components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import GastoModal from './Components/GastoModal'
import { generateId } from './herlpers';
import ListadoGasto from './Components/ListadoGasto';

const App = () => {

    const [gastos, setGastos] = useState(
      localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem  ('gastos')) : []
    )
    const [presupuesto, setPresupuesto] = useState(
      Number(localStorage.getItem('presupuesto')) ?? 0
    )
    const [isValid, setIsValid] = useState(false)
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const [gastoEditar, setGastoEditar] = useState({})
    const [filtro, setFiltro] = useState('')
    const [gastosFiltrados, setGastosFiltrados] = useState([])


    useEffect(() => {
      if(Object.keys(gastoEditar).length > 0) {
        setModal(true)
        setTimeout(() => {
          setAnimarModal(true)
        }, 200);
      }
    },[gastoEditar])

    const handleNuevoGasto = () => {
      setModal(true)
      setGastoEditar({})
      setTimeout(() => {
        setAnimarModal(true)
        
      }, 200);
    }

    const guardarGasto = (gasto) => {
      if (gasto.id) {
        // Actualizo.
        const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
        setGastos(gastoActualizado)
        setGastoEditar({})
      } else {
        // Nuevo gasto
        gasto.id = generateId()
        gasto.fecha = Date.now()
        setGastos([...gastos, gasto]);
      
      }
      setAnimarModal(false)
      setTimeout(() => {
      setModal(false);
    }, 500)
    }

    const eliminarGasto = (id) => {
      const gastosActualizados = gastos.filter ( gasto=> gasto.id !== id)

      setGastos(gastosActualizados)
    }

    useEffect(() => {
      if(filtro) {

       const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro);
      setGastosFiltrados(gastosFiltrados)
      }
    }, [filtro])

    useEffect(() => {
      localStorage.setItem("presupuesto", presupuesto ?? 0)
    }, [presupuesto])
    
    useEffect(() => {
      const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

      if(presupuestoLS > 0) {
        setIsValid(true)
      }
    },[])

    useEffect(() => {
      localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
    }, [gastos])

   
   
  return (
    <>
    <div className={modal && 'fijar'}>
      <Header
      gastos={gastos}
      setGastos={setGastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValid={isValid}
      setIsValid={setIsValid}
      />
      
     
      {isValid && (
        <>
        <main>
        <Filtros
        filtro={filtro}
        setFiltro={setFiltro}
        />
          <ListadoGasto
          filtro={filtro}
          gastosFiltrados={gastosFiltrados}
          eliminarGasto={eliminarGasto}
          handleNuevoGasto={handleNuevoGasto}
          modal={modal}
          setModal={setModal}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
          gastos={gastos}/>
        </main>
         <div className='nuevo-gasto'>
         <img 
         onClick={handleNuevoGasto}
         src={IconoNuevoGasto} alt="icono nuevo gasto" />

         </div>
         </>
      )}

      {modal && <GastoModal
      setGastoEditar={setGastoEditar}
      gastoEditar={gastoEditar}
      guardarGasto={guardarGasto}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      setModal={setModal}
      />}
       </div>
    </>
  )
}

export default App
