import React from "react";

const VerdeNormas = () => {
  return (
    <div className="alert alert-success border border-success normas">
      <p className="text-start">
        La luz verde en un semáforo indica vía libre para avanzar. Los
        conductores pueden cruzar la intersección, pero deben hacerlo con
        precaución, especialmente al inicio de la luz verde, para asegurar que
        no haya vehículos rezagados o peatones en el cruce.
      </p>
      <p className="text-center fw-bold">Excepciones</p>
      <p>
        <span className="fw-bold">Ceder el paso a peatones o ciclistas</span>:
        Aunque la luz esté en verde, los conductores deben ceder el paso si hay
        peatones o ciclistas terminando de cruzar la intersección.
      </p>
      <p>
        <span className="fw-bold">Virajes y señales adicionales</span>: En
        algunos cruces, aunque la luz esté en verde, puede haber señales o
        semáforos adicionales que regulen giros a la izquierda o a la derecha.
        En estos casos, se debe seguir la indicación específica de giro.
      </p>
      <p>
        <span className="fw-bold">Vehículos de emergencia</span>: Si una
        ambulancia, bombero o patrulla en emergencia se aproxima, los
        conductores deben ceder el paso aunque tengan luz verde. agente.
      </p>
      <p>
        <span className="fw-bold">Indicación de un agente de tránsito</span>: Si
        un agente de tránsito da una señal para detenerse, esta instrucción
        prevalece sobre la luz verde. Los conductores deben seguir la indicación
        del agente.
      </p>
    </div>
  );
};

export default VerdeNormas;
