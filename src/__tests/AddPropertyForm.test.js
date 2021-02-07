import { render, fireEvent } from "@testing-library/react";
import AddPropertyForm from "../components/AddPropertyForm";

describe("AddPropertyForm", () => {
  const mockFields = {
    title: "Spacious City Apartment",
    type: "Flat",
    bedrooms: "2",
    bathrooms: "1",
    price: "170000",
    city: "Manchester",
    email: "info@manchesterflats.com",
  };
  const onSubmit = jest.fn();
  const onChange = jest.fn();

  it("renders correctly", () => {
    const { asFragment } = render(
      <AddPropertyForm
        fields={mockFields}
        handleFieldChange={onChange}
        handleSubmit={onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls handleSubmit when form is submitted", () => {
    const { getByTestId } = render(
      <AddPropertyForm
        fields={mockFields}
        handleFieldChange={onChange}
        handleSubmit={onSubmit}
      />
    );
    const formElement = getByTestId("add-property-form");

    fireEvent.submit(formElement);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("calls onChange function when form values change", () => {
    const { getByLabelText } = render(
      <AddPropertyForm
        fields={mockFields}
        handleFieldChange={onChange}
        handleSubmit={onSubmit}
      />
    );
    const titleInput = getByLabelText(/title/i);
    const typeInput = getByLabelText(/type/i);
    const bedroomsInput = getByLabelText(/bedroom/i);
    const bathroomsInput = getByLabelText(/bathroom/i);
    const priceInput = getByLabelText(/price/i);
    const cityInput = getByLabelText(/city/i);
    const emailInput = getByLabelText(/email/i);

    expect(titleInput).toHaveValue("Spacious City Apartment");
    expect(typeInput).toHaveValue("Flat");
    expect(bedroomsInput).toHaveValue(2);
    expect(bathroomsInput).toHaveValue(1);
    expect(priceInput).toHaveValue(170000);
    expect(cityInput).toHaveValue("Manchester");
    expect(emailInput).toHaveValue("info@manchesterflats.com");

    fireEvent.change(titleInput, { target: { value: "Country Cottage" } });
    fireEvent.change(typeInput, { target: { value: "Cottage" } });
    fireEvent.change(bedroomsInput, { target: { value: 4 } });
    fireEvent.change(bathroomsInput, { target: { value: 2 } });
    fireEvent.change(priceInput, { target: { value: 250000 } });
    fireEvent.change(cityInput, { target: { value: "Leeds" } });
    fireEvent.change(emailInput, { target: { value: "info@leedscottages.com" } });

    expect(onChange).toHaveBeenCalledTimes(7);
  });
});
