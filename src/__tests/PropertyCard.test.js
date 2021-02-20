import { render } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

describe("PropertyCard", () => {
  const mockProperty = {
    title: "Light and spacious city centre apartment",
    type: "Flat",
    bedrooms: "2",
    bathrooms: "1",
    price: "170000",
    city: "Manchester",
    email: "info@manchesterflats.com",
  };

  it("renders correctly", () => {
    const { asFragment, getByText } = render(
      <PropertyCard
        title={mockProperty.title}
        type={mockProperty.type}
        bedrooms={mockProperty.bedrooms}
        bathrooms={mockProperty.bathrooms}
        price={mockProperty.price}
        city={mockProperty.city}
        email={mockProperty.email}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText("Light and spacious city centre apartment")).toBeInTheDocument();
    expect(getByText("Flat, Manchester")).toBeInTheDocument();
    expect(getByText("170,000")).toBeInTheDocument();
    expect(getByText("Enquire")).toBeInTheDocument();
  })
})

