import { useState, useEffect } from 'react'
import Error from './Error'

function Formulario({consultantes, setConsultantes, consultante, setConsultante}) {

    const [nombre, setNombre] = useState('')
    const [signo, setSigno] = useState('')
    const [date, setDate] = useState('')
    const [appointment, setAppointment] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [error, setError] = useState(false)

    useEffect( () => {
        if(Object.keys(consultante).length > 0) {
            setNombre(consultante.nombre);
            setSigno(consultante.signo);
            setDate(consultante.date);
            setAppointment(consultante.appointment);
            setMensaje(consultante.mensaje);
        }
    }, [consultante])

   

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return  fecha + random;
    }

    const handleSubmit = (e) => {  // Envío de formulario
        e.preventDefault();        // Previene la acción por defecto del input del form

        // Validando los datos del formulario
        if([ nombre, signo, date, appointment, mensaje ].includes('')) {
            
            setError(true)
            return
        }
        setError(false)

        // Construir un objeto de paciente con los datos que llenan del formulario

        const objetoConsultante = {
            nombre, 
            signo, 
            date,
            appointment,  
            mensaje
            
        }
        if(consultante.id) {
            // Editando el registro
            objetoConsultante.id = consultante.id
            const consultanteEditado = consultantes.map(consultanteState => consultanteState.id === consultante.id ? objetoConsultante : consultanteState)

            setConsultantes(consultanteEditado)
            setConsultante({})

        }else {
            // Nuevo registro
            objetoConsultante.id = generarId()
            setConsultantes([...consultantes, objetoConsultante])
        }

        
        // Reinicia el formulario
        setNombre(''),
        setSigno(''),
        setDate(''),
        setAppointment(''),
        setMensaje('')
    }
   

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='text-white text-3xl text-center'>Consultas</h2>
      <p className='text-white text-lg mt-5 text-center mb-10'>Añade las consultas y {''}
        <span className='text-blue-600 font-bold'>Adminístralas</span>
      </p>
      <form
        onSubmit={handleSubmit} // Función que maneja el envío de los datos ingresados en el form
        className='bg-transparent shadow-md rounded-lg py-10 px-5'
        
        >
          
        <div className='mb-5'>
            <label htmlFor="nombre" className='block text-white uppercase'>Nombre</label>
            <input 
                id='nombre'
                type="text"
                placeholder='Ingresa el nombre del cliente'
                className='bg-transparent text-white border w-full text-center p-2 mt-2 placeholder-gray-400 rounded-md'
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}
            />
        </div>
        <div className='mb-5'>
            <label htmlFor="signo" className='block text-white uppercase'>Signo</label>
            <input 
                id='signo'
                type="text"
                placeholder='Ingresa el signo de tu cliente'
                className='bg-transparent text-white border w-full text-center p-2 mt-2 placeholder-gray-400 rounded-md'
                value={signo}
                onChange={ (e) => setSigno(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label htmlFor="date" className='block text-white uppercase'>Fecha de nacimiento</label>
            <input 
                id='date'
                type="date"
                className='text-white bg-transparent border w-full text-center p-2 mt-2 placeholder-gray-400 rounded-md'
                value={date}
                onChange={ (e) => setDate(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label htmlFor="appointment" className='block text-white uppercase'>Fecha de consulta</label>
            <input 
                id='appointment'
                type="date"
                className='text-white bg-transparent border w-full text-center p-2 mt-2 placeholder-gray-400 rounded-md'
                value={appointment}
                onChange={ (e) => setAppointment(e.target.value)}
            />
        </div>

        

        <div className='mb-5'>
            <label htmlFor="mensaje" className='block text-white uppercase'>Motivo de consulta</label>
            <textarea 
                id='mensaje'
                className='bg-transparent text-white border w-full text-center p-2 mt-2 placeholder-gray-400 rounded-md'
                placeholder='Describe el motivo de la consulta'
                value={mensaje}
                onChange={ (e) => setMensaje(e.target.value)}
            />
        </div>
            <input 
                type="submit"
                className='bg-transparent border  w-full p-3 text-white uppercase font-bold hover:bg-blue-600 cursor-pointer transition-all'
                value={consultante.id ? "Guardar Cambios" : "Agregar Consulta"}
            />
              {error && <Error><p>Debes llenar todos los campos</p></Error>}
      </form>
    </div>
  )
}

export default Formulario

      

