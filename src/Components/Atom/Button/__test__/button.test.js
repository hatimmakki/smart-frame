import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./../index";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import checkProps from "check-prop-types";

afterEach(cleanup);
describe("Button component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button>save</Button>, div);
  });

  describe("renders", () => {
    let mocFunc;
    let button;
    beforeEach(() => {
      mocFunc = jest.fn();
      const props = {
        onClick: mocFunc
      };
      const { getByTestId } = render(<Button {...props}>save</Button>);
      button = getByTestId("button");
    });

    it("renders correctly", () => {
      expect(button).toHaveTextContent("save");
    });

    it("Should capture click event", () => {
      fireEvent.click(button);
      const callback = mocFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  it("can render a text primary button", () => {
    const { getByRole } = render(<Button color="primary">Hello World</Button>);
    const button = getByRole("button");
    expect(button).toHaveTextContent("Hello World");
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Button>save</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  describe("Checking PropTypes", () => {
    const expectedProps = {
      children: <h1>hi</h1>,
      size: "md",
      color: "primary",
      variant: "button",
      disabled: false,
      type: "submit",
      fullWidth: false,
      arrow: true,
      marginRight: false,
      onClick: () => {}
    };
    const propsError = checkProps(Button.propTypes, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
