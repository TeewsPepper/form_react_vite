

import Consultante from "./Consultante";

const AgendaConsultas = ({ consultantes, setConsultante, eliminarConsulta }) => {



  console.log(consultantes.length === 0);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      {consultantes && consultantes.length ? (
        <>
          <h2 className="text-white text-3xl text-center">Listado de Consultas</h2>
          <p className="text-white text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-fuchsia-600 font-bold">Citas y consultas</span>
          </p>

          { consultantes.map((consultante) => (
            <Consultante 
            key={consultante.id} 
            consultante={consultante}
            setConsultante={setConsultante}
            eliminarConsulta={eliminarConsulta}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-white text-3xl text-center">No hay consultas ingresadas</h2>
          <p className="text-white text-xl mt-5 mb-10 text-center">
            Ingresa tus consultas {""}
            <span className="text-blue-600 font-bold">Aquí</span>
          </p>
        </>
      )}
    </div>
  );
};

export default AgendaConsultas;