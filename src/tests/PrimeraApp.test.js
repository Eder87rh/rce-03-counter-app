import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en PrimaraApp", () => {
  test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    const saludo = "Hola, soy goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo enviado por props"', () => {
    const saludo = "Hola, soy goku";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find("p").text();
    console.log(
      "🚀 ~ file: PrimeraApp.test.js ~ line 20 ~ test ~ textoParrafo",
      textoParrafo
    );
    expect(textoParrafo).toBe(subtitulo);
  });
});
