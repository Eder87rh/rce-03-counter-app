import React, { Fragment } from "react";

const PrimeraApp = ({ saludo = "Hola Mundo" }) => {
  return (
    <Fragment>
      <h1>{saludo}</h1>
      <p>Mi primera aplicacion en react</p>
    </Fragment>
  );
};

export default PrimeraApp;
