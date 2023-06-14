import { useState } from "react";
import "./App.css";
import Alerta from "./components/Alerta";
import Login from "./components/Login";

function App() {
  const [valido, setValido] = useState();
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const recibirResultado = (e) => {
    setValido(e);
    setMostrarMensaje(true);
  };

  return (
    <div className="App">
      <Login enviarFormulario={(e) => recibirResultado(e)} />
      {mostrarMensaje && (
        <Alerta
          text={valido ? "Datos Correctos" : "Datos Incorrectos"}
          variant={valido ? "success" : "danger"}
        />
      )}
    </div>
  );
}

export default App;
