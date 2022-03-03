import { useState } from 'react'
import Header from './Components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import GastoModal from './Components/GastoModal'
import { generateId } from './herlpers';
import ListadoGasto from './Components/ListadoGasto';

const App = () => {

    const [presupuesto, setPresupuesto] = useState(0)
    const [isValid, setIsValid] = useState(false)
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const [gastos, setGastos] = useState([])


    const handleNuevoGasto = () => {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
        console.log("21");
      }, 200);
    }

  

    const guardarGasto = (gasto) => {
      gasto.id = generateId()
      setGastos([...gastos, gasto]);
      
      setTimeout(() => {
        setModal(false);
    }, 500)
    }
    console.log(gastos);
  return (
    <>
    <div>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValid={isValid}
      setIsValid={setIsValid}
      />

      </div>
      {isValid && (
        <>
        <main>
          <ListadoGasto 
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
      guardarGasto={guardarGasto}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      setModal={setModal}
      />}
    </>
  )
}

export default App
