import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  it('renders the heading', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  it('renders the about link', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('About');
  });

  it('renders the restaurants link', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Restaurants');
  });
});
