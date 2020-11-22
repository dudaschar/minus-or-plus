import React from 'react';
import { fireEvent, render, screen } from 'testUtils/testUtils';

import Game from './Game';

describe('Game pattern', () => {
  it('should display controls when is manual mode and it is your time', () => {
    render(
      <Game
        moves={[]}
        player="player1"
        type="manual"
        nextPlayer="player1"
        handleAddition={() => {}}
      />
    );

    expect(screen.getByText('-1')).toBeTrue;
    expect(screen.getByText('0')).toBeTrue;
    expect(screen.getByText('+1')).toBeTrue;
  });

  it('should hide controls when is manual mode and it is not your time', () => {
    render(
      <Game
        moves={[]}
        player="player1"
        type="manual"
        nextPlayer="player2"
        handleAddition={() => {}}
      />
    );

    expect(screen.queryByText('-1')).toBeNull();
    expect(screen.queryByText('0')).toBeNull();
    expect(screen.queryByText('+1')).toBeNull();
  });

  it('should hide controls when is automatic mode', () => {
    render(
      <Game
        moves={[]}
        player="player1"
        type="manual"
        nextPlayer="player2"
        handleAddition={() => {}}
      />
    );

    expect(screen.queryByText('-1')).toBeNull();
    expect(screen.queryByText('0')).toBeNull();
    expect(screen.queryByText('+1')).toBeNull();
  });

  it('should call a function when click on an addition button', () => {
    const handleAdditionMock = jest.fn();
    
    render(
      <Game
        moves={[]}
        player="player1"
        type="manual"
        nextPlayer="player1"
        handleAddition={handleAdditionMock}
      />
    );

    fireEvent.click(screen.getByText('-1'));
    expect(handleAdditionMock).toBeCalled();
    
    fireEvent.click(screen.getByText('0'));
    expect(handleAdditionMock).toBeCalledTimes(2);

    fireEvent.click(screen.getByText('+1'));
    expect(handleAdditionMock).toBeCalledTimes(3);
  });

});
