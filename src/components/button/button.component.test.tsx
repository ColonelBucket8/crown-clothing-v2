import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button, { BUTTON_TYPE_CLASSES } from "./button.component";

describe("Navigation component", () => {
  it("should render the basic button component with children", () => {
    render(<Button>Click Me!</Button>);

    const buttonElement = screen.getByText("Click Me!");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("cursor: pointer");
    expect(buttonElement).toHaveStyle("background-color: black");
    expect(buttonElement).toHaveStyle("color: white");

    fireEvent.mouseEnter(buttonElement);
    expect(buttonElement).toHaveStyle("border: none");
  });

  it("should not render the google button component with children", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>Click Me!</Button>);

    const buttonElement = screen.getByText("Click Me!");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("cursor: pointer");
    expect(buttonElement).toHaveStyle("background-color: #4285f4");
    expect(buttonElement).toHaveStyle("color: white");

    // On hover
    userEvent.hover(buttonElement);
    expect(buttonElement).toHaveStyle("border: none");
    // expect(buttonElement).toHaveStyle('background-color: #357ae8');
  });

  it("should render the inverted button component with children", async () => {
    render(
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Click Me!</Button>
    );

    const buttonElement = screen.getByText("Click Me!");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("cursor: pointer");
    expect(buttonElement).toHaveStyle("background-color: white");
    expect(buttonElement).toHaveStyle("color: black");

    // On hover
    // TODO: Doesn't work for hover
    // userEvent.hover(buttonElement);
    // expect(buttonElement).toHaveStyle('border: none');
    // expect(buttonElement).toHaveStyle('background-color: black');
    // expect(buttonElement).toHaveStyle('color: white');
  });
});
