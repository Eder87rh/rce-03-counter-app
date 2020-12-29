import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("CounterApp", () => {
  it("Counter app should display correctly", () => {
    const wrapper = shallow(<CounterApp value={10} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Counter app should display 10 by default", () => {
    const wrapper = shallow(<CounterApp />);
    const value = wrapper.find("h2").text();
    expect(value).toBe("10");
  });
});
