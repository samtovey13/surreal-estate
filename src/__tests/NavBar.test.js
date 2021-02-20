import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from '../components/NavBar';

jest.mock("../components/FacebookLoginButton", () => () => (
  <div>Facebook Login Button</div>
));

describe("NavBar", () => {

  const onLogin = jest.fn();
  const onLogout = jest.fn();
  

  it("renders correctly with no user", () => {
    const { asFragment, queryByText, getByText, getByAltText } = render(
      <MemoryRouter>
        <NavBar onLogin={onLogin} onLogout={onLogout} userId="" />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

    expect(queryByText(/favourites/i)).not.toBeInTheDocument();

    expect(getByText("View Properties")).toHaveAttribute("href", "/");
    expect(getByText("Add a Property")).toHaveAttribute("href", "/add-property");
    expect(getByAltText("logo")).toHaveClass("logo");
  });

  it("renders correctly with user logged in", () => {
    const { asFragment, getByText, getByAltText } = render(
      <MemoryRouter>
        <NavBar onLogin={onLogin} onLogout={onLogout} userId="123" />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

    expect(getByText("View Properties")).toHaveAttribute("href", "/");
    expect(getByText("My Favourites")).toHaveAttribute("href", "/favourites");
    expect(getByText("Add a Property")).toHaveAttribute("href", "/add-property");
    expect(getByAltText("logo")).toHaveClass("logo");
  });

});
