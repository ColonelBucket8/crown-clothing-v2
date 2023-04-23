import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./navigation.component";
import { Provider } from "react-redux";
import { store } from "../../store/store";

// Render the navigation component with the mock history
// and the store passed into the redux provider
// and with the memory router
const renderNavigationWithMemoryRouter = () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/shop"]}>
        <Navigation />
      </MemoryRouter>
    </Provider>
  );
};

// Test the navigation component
describe("Navigation component", () => {
  // Test the navigation component renders
  it("should render the navigation component", () => {
    renderNavigationWithMemoryRouter();
  });

  // Test the navigation component renders with the shop link
  it("should render the navigation component with the shop link", () => {
    renderNavigationWithMemoryRouter();
    expect(screen.getByText("SHOP")).toBeInTheDocument();
  });

  // Test the navigation component renders with the sign in link
  it("should render the navigation component with the sign in link", () => {
    renderNavigationWithMemoryRouter();
    expect(screen.getByText("SIGN IN")).toBeInTheDocument();
  });

  // Test the navigation component renders with the cart icon
  it("should render the navigation component with the total products in cart icon", () => {
    renderNavigationWithMemoryRouter();
    expect(screen.getByText(/[0-9]/)).toBeInTheDocument();
  });
});
