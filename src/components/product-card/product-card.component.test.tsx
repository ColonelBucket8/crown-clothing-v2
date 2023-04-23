import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ProductCard from "./product-card.component";
import { store } from "../../store/store";
import { setCartItems } from "../../store/cart/cart.action";

describe("ProductCard component", () => {
  const product = {
    id: 1,
    name: "Product 1",
    price: 10,
    imageUrl: "https://example.com/product1.jpg",
    quantity: 1,
  };

  beforeEach(() => {
    store.dispatch(setCartItems([]));
  });

  it("should render product name, price, and image", () => {
    store.dispatch(setCartItems([product]));
    render(
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.price)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toHaveAttribute(
      "src",
      product.imageUrl
    );
  });

  it("should dispatch add item to cart action when Add button is clicked", () => {
    render(
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    );

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    expect(store.getState().cart.cartItems).toEqual([product]);
  });
});
