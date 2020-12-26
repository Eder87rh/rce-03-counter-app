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
});
