import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("renders a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success message" success={true} />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText("Success message")).toHaveClass("alert");
  });

  it("renders an error message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Error message" success={false} />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText("Error message")).toHaveClass("alert");
  });

  it("does not render a message when message is empty", () => {
    const { asFragment, queryByTestId } = render(
      <Alert message="" success={false} />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(queryByTestId("alert")).not.toBeInTheDocument();
  });
});
