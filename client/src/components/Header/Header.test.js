import React from 'react';
import { render } from 'testUtils/testUtils';

import Header from './Header';

describe('Header Component', () =>  {
  it('should render player 1 with the same icon everytime', () =>  {
    const { asFragment } = render(<Header name="player1" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render player 2 with the same icon everytime', () =>  {
    const { asFragment } = render(<Header name="player2" />);

    expect(asFragment()).toMatchSnapshot();
  });
});