import { render, fireEvent } from "@testing-library/react";
import AddProperty from '../components/AddProperty';

describe("AddProperty", () => {
  const mockFields = {
    title: "",
    type: "Flat",
    bedrooms: "",
    bathrooms: "",
    price: "",
    city: "Manchester",
    email: "",
  };
  const onSubmit = jest.fn();
  const onChange = jest.fn();

  it("renders correctly", () => {
    const { asFragment } = render(
      <AddProperty
        fields={mockFields}
        handleFieldChange={onChange}
        handleSubmit={onSubmit}
      />
    );
    expect(asFragment).toMatchSnapshot();
  })

  it("calls handleSubmit when form is submitted", () => {
    const { getByTestId } = render(
      <AddProperty
        fields={mockFields}
        handleFieldChange={onChange}
        handleSubmit={onSubmit}
      />
    );
    const formElement = getByTestId("add-property-form");

    fireEvent.submit(formElement);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
})
