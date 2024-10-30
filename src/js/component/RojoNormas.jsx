import React from "react";

const RojoNormas = () => {
  return (
    <div className="alert alert-danger border border-danger normas">
      <p className="text-start">
        El color rojo en un semáforo significa alto total, y su función
        principal es detener el flujo de vehículos para evitar accidentes y
        facilitar el paso seguro de peatones o de otros vehículos. Las reglas
        básicas del color rojo en un semáforo son:
      </p>
      <p className="text-start">
        <span className="fw-bold">Parada Obligatoria</span>: Los vehículos deben
        detenerse completamente antes de la línea de alto o en la zona designada
        para ello, evitando obstruir el cruce peatonal.
      </p>
      <p className="text-start">
        <span className="fw-bold">Esperar Cambio de Luz</span>: Los conductores
        deben esperar a que el semáforo cambie a verde para avanzar, ya que el
        rojo implica detenerse sin excepción.
      </p>
      <p className="text-center fw-bold">Excepciones</p>
      <p>
        Giro a la derecha (donde esté permitido), después de detenerse y ceder
        el paso.
      </p>
      <p>Vehículos de emergencia con luces y sirena activadas.</p>
      <p>Indicación de un agente de tránsito que contradiga el semáforo.</p>
      <p>
        Rojo intermitente que permite avanzar después de detenerse, como una
        señal de "alto".
      </p>
    </div>
  );
};

export default RojoNormas;
