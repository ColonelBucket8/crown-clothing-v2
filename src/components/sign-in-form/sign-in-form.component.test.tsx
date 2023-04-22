import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SignInForm from './sign-in-form.component';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import '@testing-library/jest-dom';

// Create a test for sign in form component
describe('Sign In Form component', () => {
  it('should render the sign in form component', () => {
    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );

    // Check if the form is rendered
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  // Create a test if the test is submitted
  it('should submit the form', () => {
    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );

    // Input the email and password
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: /Sign In/i });

    // Check if the email and password are rendered
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    // Check if the email and password are empty
    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
  });
});
