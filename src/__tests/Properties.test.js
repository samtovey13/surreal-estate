import { render } from "@testing-library/react";
import Properties from "../components/Properties";

describe("Properties", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
        <Properties />
    );
    expect(asFragment).toMatchSnapshot();
  });
});
