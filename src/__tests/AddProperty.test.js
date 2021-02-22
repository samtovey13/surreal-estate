import { fireEvent, render, waitFor } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

import {createProperty} from "../requests/index";
jest.mock("../requests/index");

const mockData = {
  title: "Spacious City Apartment",
  type: "Flat",
  bedrooms: "2",
  bathrooms: "1",
  price: "170000",
  city: "Manchester",
  email: "info@manchesterflats.com",
};

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment, getByTestId, queryByTestId } = render(<AddProperty />);
    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("add-property-form")).toBeInTheDocument();
    expect(queryByTestId("alert")).not.toBeInTheDocument();
  });

  it("displays success message following a 201 response from the API", async () => {
    createProperty.mockResolvedValue({
      status: 201,
      data: mockData,
    });
    const { getByTestId, getByText } = render(<AddProperty />);
    const form = getByTestId("add-property-form");

    fireEvent.submit(form);

    await waitFor(() => expect(getByText(/success/i)).toHaveClass("alert"));
  });

  it("displays error message following a bad response from the API", async () => {
    createProperty.mockResolvedValue(Promise.reject());
    const { getByTestId, getByText } = render(<AddProperty />);
    const form = getByTestId("add-property-form");

    fireEvent.submit(form);

    await waitFor(() =>
      expect(getByText(/something went wrong/i)).toHaveClass("alert")
    );
  });
})
