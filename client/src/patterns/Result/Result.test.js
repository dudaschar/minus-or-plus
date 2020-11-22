import React from 'react';
import { fireEvent, render, screen } from 'testUtils/testUtils';

import Result from './Result';

describe('Result Pattern', () => {
  it('should display the correct message when player won', () => {
    render(
      <Result
        winner="player1"
        player="player1"
        handleNewGame={() => {}}
      />
    );

    expect(screen.getByText('You won!')).toBeTrue;
  });

  it('should display the correct message when player lose', () => {
    render(
      <Result
        winner="player2"
        player="player1"
        handleNewGame={() => {}}
      />
    );

    expect(screen.getByText('You lose!')).toBeTrue;
  });

  it('should call a function when the user click on play again button', () => {
    const handleNewGameMock = jest.fn();
    render(
      <Result
        winner="player2"
        player="player1"
        handleNewGame={handleNewGameMock}
      />
    );

    fireEvent.click(screen.getByText('Play Again'));

    expect(handleNewGameMock).toBeCalled();
  });
});
