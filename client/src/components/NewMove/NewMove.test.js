import React from 'react';
import { render, screen } from 'testUtils/testUtils';

import NewMove from './NewMove';

describe('NewMove Component', () => {
  it('should render properly with player 1', () => {
    const content = {number: 6, addition: 0, nextNumber: 2, player: 'player1'};
    const { asFragment } = render(<NewMove content={content} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render properly with player 2', () => {
    const content = {number: 6, addition: 0, nextNumber: 2, player: 'player2'};
    const { asFragment } = render(<NewMove content={content} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the expression', () => {
    const content = {number: 6, addition: 0, nextNumber: 2, player: 'player1'};
    render(<NewMove content={content} />);

    expect(screen.getByText('[(0 + 6) / 3] = 2')).toBeTrue;
  });
});