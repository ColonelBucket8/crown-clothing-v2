import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItem from './cart-item.component';

const cartItemTest = {
  id: 4,
  name: 'Cart Item Test',
  imageUrl:
    'https://www.kxan.com/wp-content/uploads/sites/40/2017/07/rick-astley-never-gonna-give-you-up_35327903_ver1.0.jpg?w=1208&h=714&crop=1',
  quantity: 1,
  price: 1000,
};

test('render cart item', () => {
  render(<CartItem cartItem={cartItemTest} />);

  const totalPrice = `${cartItemTest.quantity} X $${cartItemTest.price}`;

  expect(screen.getByText(totalPrice)).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByText(cartItemTest.name)).toBeInTheDocument();
});
