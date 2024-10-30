import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./Semaforo";

//create your first component
const Home = () => {
  const [semaforo, setSemaforo] = useState("");

  return (
    <>
      <div className="row">
        <div className="col-12 text-center text-white">
          <h1 className="fw-bold fs-1 bg-black bg-opacity-50 py-3">
            <span className="text-danger header">Normas</span>{" "}
            <span className="text-warning header">De Un</span>{" "}
            <span className="text-success header">Semáforo</span>
          </h1>
        </div>
      </div>
      <div className="row text-center">
        <h2
          className={
            semaforo.length > 0 ? "d-none" : "fw-bold alert alert-warning"
          }
        >
          Toca el semaforo para interactuar con el
        </h2>
      </div>
      <div className="row">
        <Semaforo />
      </div>
    </>
  );
};

export default Home;
