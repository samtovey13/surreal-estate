import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Alert />);
    expect(asFragment).toMatchSnapshot();
  });
});
