

const Consultante = ({consultante, setConsultante, eliminarConsulta}) => {


    const { nombre, signo, date, appointment,  mensaje, id } = consultante;

    const handleEliminar = () => {
      const respuesta = confirm('Deseas eliminar esta consulta?');

      if(respuesta) {
        eliminarConsulta(id)
      }
    }
  
    return (
      <div className="mx-3 my-5 bg-transparent shadow-md px-5 py-10 border rounded-xl">
        <p className="text-white font-bold mb-3  uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
  
        <p className="font-bold mb-3 text-white uppercase">
          signo: {""}
          <span className="font-normal normal-case">{signo}</span>
        </p>
        <p className="font-bold mb-3 text-white uppercase">
          Fecha de nacimiento: {""}
          <span className="font-normal normal-case">{date}</span>
        </p>
        <p className="font-bold mb-3 text-white uppercase">
          Fecha de consulta: {""}
          <span className="font-normal normal-case">{appointment}</span>
        </p>
        <p className="font-bold mb-3 text-white uppercase">
          Consulta: {""}
          <span className="font-normal normal-case">{mensaje}</span>
        </p>
  
        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-3 bg-transparent border hover:bg-purple-600 text-white font-bold rounded-lg"
            onClick={() => setConsultante(consultante) }
          >Editar</button>
  
          <button
            type="button"
            className="py-2 px-3 bg-transparent border hover:bg-purple-600 text-white font-bold rounded-lg"
            onClick={handleEliminar}
          >Eliminar</button>
  
        </div>
      </div>
    );
  };
  
  export default Consultante;