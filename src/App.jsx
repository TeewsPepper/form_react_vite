import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import AgendaConsultas from './components/AgendaConsultas'
import Footer from './components/Footer';

function App() {
  
  const [consultantes, setConsultantes] = useState(JSON.parse(localStorage.getItem('consultantes')) ?? []);
  const [consultante, setConsultante] = useState({})


  useEffect(() => {
    localStorage.setItem('consultantes', JSON.stringify( consultantes ));
  }, [consultantes])

  const eliminarConsulta = (id) => {
    const consultasActualizadas = consultantes.filter( consultante => consultante.id !== id)
    setConsultantes(consultasActualizadas);
  }

  return (

    <div className='container mx-auto mt-20'>

    <Header />

    <div className="mt-12 md:flex">
      
      <Formulario 
      
        consultantes={consultantes}
        setConsultantes={setConsultantes}
        consultante={consultante}
        setConsultante={setConsultante}
      />

      <AgendaConsultas 
         consultantes={consultantes}
         setConsultante={setConsultante}
         eliminarConsulta={eliminarConsulta}
      />
    </div>
    <Footer />



    </div>

  )
}

export default App
