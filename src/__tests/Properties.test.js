import { render, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Properties from "../components/Properties";

import getProperties from "../requests/getProperties";
jest.mock("../requests/getProperties");

describe("Properties", () => {

  beforeEach(() => {
    getProperties.mockResolvedValue({
      status: 200,
      data: [
        {
          bathrooms: "1",
          bedrooms: "2",
          city: "Leeds",
          email: "leedsproperty@gmail.com",
          price: "200000",
          title: "Brand new amazing apartment",
          type: "Flat",
          __v: 0,
          _id: "1234",
        },
        {
          bathrooms: "2",
          bedrooms: "4",
          city: "Manchester",
          email: "rose@cottages.co.uk",
          price: "350000",
          title: "Rose Cottage",
          type: "Cottage",
          __v: 0,
          _id: "5678",
        },
      ],
    });
  });

  it("renders correctly", async () => {
    const history = createMemoryHistory();
    const { asFragment, getByText, queryByTestId, getAllByTestId } = render(
      <Router history={history}>
        <Properties history={history} />
      </Router>
    );
    await waitFor(() =>
      expect(getByText("Brand new amazing apartment")).toBeInTheDocument()
    );
    expect(getAllByTestId("property-card")).toHaveLength(2);
    expect(getByText("Flat, Leeds")).toBeInTheDocument();
    expect(getByText("Rose Cottage")).toBeInTheDocument();
    expect(getByText("Cottage, Manchester")).toBeInTheDocument();

    expect(queryByTestId("properties-error-message")).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders error message following a bad API request", async () => {
    getProperties.mockResolvedValue(Promise.reject("error!"));
    const history = createMemoryHistory();
    const { asFragment, getByText, queryByTestId } = render(
      <Router history={history}>
        <Properties />
      </Router>
    );
    await waitFor(() =>
      expect(getByText(/Oops! Something went wrong/i)).toHaveClass(
        "alert"
      )
    );
    expect(queryByTestId("property-card")).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders error message following a 404 response", async () => {
    getProperties.mockResolvedValue({status: 404, data: {}, });
    const history = createMemoryHistory();
    const { asFragment, getByText, queryByTestId } = render(
      <Router history={history}>
        <Properties />
      </Router>
    );
    await waitFor(() =>
      expect(getByText(/Oops! Something went wrong/i)).toHaveClass(
        "alert"
      )
    );
    expect(queryByTestId("property-card")).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
