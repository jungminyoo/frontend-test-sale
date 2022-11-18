import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { MACBOOK_2020_PRO_13 } from './api/data/MACBOOK_2020_PRO_13';

test('renders learn react link', () => {
  render(<App sale={MACBOOK_2020_PRO_13} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
