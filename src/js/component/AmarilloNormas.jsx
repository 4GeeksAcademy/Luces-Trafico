import React from "react";

const AmarilloNormas = () => {
  return (
    <div className="alert alert-warning border border-warning normas">
      <p className="text-start">
        La luz amarilla en un semáforo indica precaución y advierte a los
        conductores que el semáforo cambiará a rojo en breve. Su propósito es
        dar tiempo para que los vehículos reduzcan la velocidad y se preparen
        para detenerse. La regla general es detenerse si es seguro hacerlo antes
        de llegar a la intersección; sin embargo, si ya estás demasiado cerca
        del cruce, puedes continuar con precaución.
      </p>
      <p className="text-center fw-bold">Excepciones</p>
      <p>
        <span className="fw-bold">Paso seguro si estás muy cerca</span>: Si un
        vehículo está cerca de la intersección al encenderse la luz amarilla y
        frenar de forma abrupta podría causar un accidente o poner en riesgo la
        seguridad, se permite pasar con precaución.
      </p>
      <p>
        <span className="fw-bold">Luz amarilla intermitente</span>: En algunos
        cruces de baja velocidad o zonas de poco tráfico, la luz amarilla
        intermitente indica que se puede cruzar, pero se debe proceder con
        cautela, vigilando el entorno y cediendo el paso si es necesario.
      </p>
      <p>
        <span className="fw-bold">Señalización de un agente de tránsito</span>:
        Si un agente de tránsito está controlando la intersección y da
        indicaciones de continuar, estas prevalecen sobre la luz amarilla. En
        este caso, el conductor debe seguir las instrucciones del agente.
      </p>
    </div>
  );
};

export default AmarilloNormas;
