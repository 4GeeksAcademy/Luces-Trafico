import AmarilloNormas from "./AmarilloNormas";
import RojoNormas from "./RojoNormas";
import VerdeNormas from "./VerdeNormas";
import React, { useState } from "react";

const Semaforo = () => {
  const [semaforo, setSemaforo] = useState("");
  console.log(semaforo);

  const Normas = (color) => {
    if (color === "Rojo") {
      return <RojoNormas />;
    } else if (color === "Amarillo") {
      return <AmarilloNormas />;
    } else if (color === "Verde") {
      return <VerdeNormas />;
    } else {
      return "";
    }
  };

  return (
    <>
      <div className="col-12 col-md-4" id="contenedor-semaforo">
        <div
          className="bg-black rounded-3 d-flex flex-column py-3"
          id="semaforo"
        >
          <div
            className={semaforo === "Rojo" ? "my-2 activo-rojo" : "my-2"}
            onClick={() => {
              setSemaforo("Rojo");
            }}
            id="luz-roja"
          >
            <span className="d-none">a</span>
          </div>
          <div
            className={
              semaforo === "Amarillo" ? "my-2 activo-amarillo" : "my-2"
            }
            onClick={() => {
              setSemaforo("Amarillo");
            }}
            id="luz-amarilla"
          >
            <span className="d-none">a</span>
          </div>
          <div
            className={semaforo === "Verde" ? "my-2 activo-verde" : "my-2"}
            id="luz-verde"
            onClick={() => {
              setSemaforo("Verde");
            }}
          >
            <span className="d-none">a</span>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-12">{Normas(semaforo)}</div>
    </>
  );
};

export default Semaforo;
