import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from '../components/App';

jest.mock("../components/FacebookLoginButton", () => () => (
  <div>Facebook Login Button</div>
));

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
