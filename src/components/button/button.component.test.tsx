import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { BUTTON_TYPE_CLASSES } from './button.component';

describe('Navigation component', () => {
  it('should render the basic button component with children', () => {
    render(<Button>Click Me!</Button>);

    const buttonElement = screen.getByText('Click Me!');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle('cursor: pointer');
    expect(buttonElement).toHaveStyle('background-color: black');
    expect(buttonElement).toHaveStyle('color: white');

    fireEvent.mouseEnter(buttonElement);
    expect(buttonElement).toHaveStyle('border: none');
  });

  it('should not render the google button component with children', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>Click Me!</Button>);

    const buttonElement = screen.getByText('Click Me!');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle('cursor: pointer');
    expect(buttonElement).toHaveStyle('background-color: #4285f4');
    expect(buttonElement).toHaveStyle('color: white');

    // On hover
    fireEvent.mouseEnter(buttonElement);
    expect(buttonElement).toHaveStyle('border: none');
    // expect(buttonElement).toHaveStyle('background-color: #357ae8');
  });
});
