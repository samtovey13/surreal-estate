import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
jest.mock("react-facebook-login/dist/facebook-login-render-props");

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
