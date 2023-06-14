import Alert from 'react-bootstrap/Alert';
import React from "react";
import "./Alerta.css";

const Alerta = ({text, variant = "success"}) => {
  return (
    <div>
      <Alert className='mb-2' variant={variant}>{text}</Alert>
    </div>
  );
};

export default Alerta;
