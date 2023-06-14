import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Login.css";

const Login = ({ enviarFormulario }) => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [desabilitarBonton, setDesabilitarBonton] = useState(true);

  const correoVal = "correo@correo.com";
  const contraseñaVal = "contraseña";

  // const [error, setError] = useState("bien");

  const validarCampos = (e) => {
    e.preventDefault();

    if (correo === correoVal && contraseña === contraseñaVal) {
      return enviarFormulario(true);
    }
    return enviarFormulario(false);
  };

  const verificarCampo = (e) => {
    setContraseña(e.target.value);

    if (correo !== "" && contraseña !== "") {
      setDesabilitarBonton(false);
    }
  };

  return (
    <div className="formulario">
      <form onSubmit={validarCampos}>
        <div className="form-group">
          <label for="correo">Correo:</label>
          <input
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
            className="form-control mt-2"
            type="text"
            id="correo"
          />
        </div>
        <div className="form-group">
          <label className="mt-2" for="contraseña">Contraseña:</label>
          <input
            onChange={(e) => {
              verificarCampo(e);
            }}
            className="form-control mt-2"
            type="text"
            id="contraseña"
          />
        </div>
        <Button
          className="btn btn-dark my-3"
          type="submit"
          disabled={desabilitarBonton}
        >
          Iniciar Sesión
        </Button>
      </form>
    </div>
  );
};

export default Login;
