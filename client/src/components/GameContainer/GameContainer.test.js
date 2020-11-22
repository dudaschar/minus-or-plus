import React from 'react';
import { render, screen } from 'testUtils/testUtils';

import GameContainer from './GameContainer';

describe('GameContainer Component', () => {
  it('should render properly', () => {
    const { asFragment } = render(
      <GameContainer player="1">
        <div></div>
      </GameContainer>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as a Cat player', () => {
    render(
      <GameContainer player="player1">
        <div></div>
      </GameContainer>
    );

    expect(screen.getByText('Cat')).toBeTrue;
  });

  it('should render as an E.T. player', () => {
    render(
      <GameContainer player="player2">
        <div></div>
      </GameContainer>
    );

    expect(screen.getByText('E.T.')).toBeTrue;
  });
});