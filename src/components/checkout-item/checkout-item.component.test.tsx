import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import React from "react";
import CheckoutItem from "./checkout-item.component";

const cartItem = {
  id: 3,
  imageUrl: "https://example.com/item3.jpg",
  name: "Item 3",
  price: 5.99,
  quantity: 1,
};

describe("Checkout Item component", () => {
  it("should render the checkout item component", () => {
    render(
      <Provider store={store}>
        <CheckoutItem cartItem={cartItem} />
      </Provider>
    );

    expect(screen.getByText("Item 3")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  // TODO: Fix this test
  // it("should remove the item if the remove button is clicked", () => {
  //   render(
  //     <Provider store={store}>
  //       <CheckoutItem cartItem={cartItem} />
  //     </Provider>
  //   );
  //
  //   expect(screen.getByText("Item 3")).toBeInTheDocument();
  //   expect(screen.getByText("1")).toBeInTheDocument();
  //
  //   screen.getByTestId("remove-button").click();
  //
  //   expect(screen.queryByText("Item 3")).not.toBeInTheDocument();
  //   expect(screen.queryByText("1")).not.toBeInTheDocument();
  // });

  // TODO: Fix this test
  // it("should increase item quantity if right arrow is clicked", function () {
  //   render(
  //     <Provider store={store}>
  //       <CheckoutItem cartItem={cartItem} />
  //     </Provider>
  //   );
  //
  //   expect(screen.getByText("Item 3")).toBeInTheDocument();
  //   expect(screen.getByText("1")).toBeInTheDocument();
  //
  //   const arrow = screen.getByTestId("right-arrow");
  //   fireEvent.click(arrow);
  //
  //   expect(screen.getByText("2")).toBeInTheDocument();
  // });
});
