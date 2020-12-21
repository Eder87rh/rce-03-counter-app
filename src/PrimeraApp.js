import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo = "Hola Mundo", subtitulo }) => {
  return (
    <Fragment>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </Fragment>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "soy un subtitulo",
};

export default PrimeraApp;
