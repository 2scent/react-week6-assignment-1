import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { container, queryAllByText } = render((
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();

  expect(queryAllByText('서울')).not.toBeNull();
  expect(queryAllByText('한식')).not.toBeNull();

  expect(container).toHaveTextContent('Home');
});
