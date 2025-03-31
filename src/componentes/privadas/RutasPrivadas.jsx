import React from "react";
import { Navigate } from "react-router-dom";

const RutasPrivadas = ({ element }) => {
  const estasautenticado = !!localStorage.getItem("llave",);

  if (estasautenticado) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RutasPrivadas;