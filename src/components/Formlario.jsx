import React, { useState } from "react";
import { calcularTotal } from "../helpers";

const Formulario = (props) => {
  const {
    cantidad,
    setCantidad,
    plazo,
    setPlazo,
    setTotal,
  } = props;

  const [error, seterror] = useState(false);

  const calcularPrestamo = (e) => {
    e.preventDefault();

    if (cantidad === 0 || plazo === "") {
      seterror(true);
      return;
    }

    seterror(false);

    const total = calcularTotal(cantidad, plazo);

    //Mostrar resultados

    setTotal(total);
  };

  return (
    <div>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => setPlazo(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>

      {error ? <p className="error">Ambos campos son obligatorios</p> : ""}
    </div>
  );
};

export default Formulario;
