import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from '../components/App';

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
