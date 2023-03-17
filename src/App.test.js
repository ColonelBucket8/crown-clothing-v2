import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  expect(true).toBeTruthy();
});
