import { render, screen } from "@testing-library/react";
import React from "react";
import CategoryPreview from "./category-preview.component";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

const categoryItems = [
  {
    id: 1,
    imageUrl: "https://example.com/item1.jpg",
    name: "Item 1",
    price: 10.99,
  },
  {
    id: 2,
    imageUrl: "https://example.com/item2.jpg",
    name: "Item 2",
    price: 19.99,
  },
  {
    id: 3,
    imageUrl: "https://example.com/item3.jpg",
    name: "Item 3",
    price: 5.99,
  },
];

describe("Category Preview component", () => {
  it("should render the category preview component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/shop"]}>
          <CategoryPreview title={"example"} products={categoryItems} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/example/i)).toBeInTheDocument();
    categoryItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.price)).toBeInTheDocument();
    });
  });
});
