import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo app', () => {
  render(<App />);
  const addButton = screen.getByText(/Добавить/i);
  expect(addButton).toBeInTheDocument();
});
