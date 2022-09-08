import React from "react";

const Resultado = ({total, plazo,cantidad}) => (

  <div className=" resultado">
    <h2>Resumen</h2>
    <p>La cantidad solicitada es: ${cantidad}</p>
    <p>A pagar en: {plazo} meses</p>
    <p>Pago de cada mes: ${(total / plazo).toFixed(2)}  </p>
    <p>Total a pagar: ${(total).toFixed(2)} </p>
  </div>

);

export default Resultado;
