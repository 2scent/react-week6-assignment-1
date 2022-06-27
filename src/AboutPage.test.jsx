import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

test('AboutPage', () => {
  const { container } = render(<AboutPage />);
  expect(container).toHaveTextContent('About');
  expect(container).toHaveTextContent('About 페이지입니다.');
});
