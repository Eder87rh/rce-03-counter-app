import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  it("Counter app should display correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Counter app should display 10 by default", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const value = wrapper.find("h2").text();
    expect(value).toBe("100");
  });

  it("Counter should increment with +1 button", () => {
    const btn1 = wrapper.find("button").at(0);
    btn1.simulate("click");
    const value = wrapper.find("h2").text();

    expect(value).toBe("11");
  });

  it("Counter should decrement with -1 button", () => {
    const btn1 = wrapper.find("button").at(2);
    btn1.simulate("click");
    const value = wrapper.find("h2").text();

    expect(value).toBe("9");
  });

  it("Should set default value after pressing reset button", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    const btn1 = wrapper.find("button").at(0);
    btn1.simulate("click");

    const btnReset = wrapper.find("button").at(1);
    btnReset.simulate("click");
    const value = wrapper.find("h2").text();

    expect(value).toBe("105");
  });
});
