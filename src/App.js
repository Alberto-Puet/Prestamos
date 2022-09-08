import React, { useState } from "react";
import Formulario from "./components/Formlario";
import Header from "./components/Header";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

  let componente;

   if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado 
                   total={total} 
                   plazo={plazo} 
                   cantidad={cantidad} 
                />;
  }

  return (
    <div className="App">
      <Header titulo="Cotizá tu presupuesto en el acto" />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotal={setTotal}
        />

        <div className="mensajes">{componente}</div>
      </div>
    </div>
  );
}

export default App;
