import React from 'react';
import { fireEvent, render, screen }  from 'testUtils/testUtils';

import Start from './Start';

describe('Start pattern', () => {
  it('should call the start function with the button is enable', () => {
    const handleStartMock = jest.fn();
    render(
      <Start
        number={6}
        handleNumberInput={() => {}}
        isButtonEnabled={true}
        handleStart={handleStartMock}
        ready={true}
      />
    );

    fireEvent.click(screen.getByText('manual'));
    expect(handleStartMock).toBeCalled();
  });

  it(
    'should display an error message if the number is smaller than 1',
    () => {
      render(
        <Start
          number={0}
          handleNumberInput={() => {}}
          isButtonEnabled={true}
          handleStart={() => {}}
          ready={true}
        />
      );

      expect(screen.getByText('Number should be bigger than 1!')).toBeTrue;
    }
  );
  
  it(
    'should display an error message if the input is empty',
    () => {
      render(
        <Start
          number={''}
          handleNumberInput={() => {}}
          isButtonEnabled={true}
          handleStart={() => {}}
          ready={true}
        />
      );

      expect(screen.getByText('Number should be bigger than 1!')).toBeTrue;
    }
  );

  it(
    'should not display an error message if the number is bigger than 1',
    () => {
      render(
        <Start
          number={5}
          handleNumberInput={() => {}}
          isButtonEnabled={true}
          handleStart={() => {}}
          ready={true}
        />
      );

      expect(screen.queryByText('Number should be bigger than 1!')).toBeNull();
    }
  );

  it('should display an error message if there is only one player connected', () => {
    render(
      <Start
        number={6}
        handleNumberInput={() => {}}
        isButtonEnabled={true}
        handleStart={() => {}}
        ready={false}
      />
    );

    expect(screen.getByText('Waiting a second player'));
  });

  it('should not display an error message if both players are connected', () => {
    render(
      <Start
        number={6}
        handleNumberInput={() => {}}
        isButtonEnabled={true}
        handleStart={() => {}}
        ready={true}
      />
    );

    expect(screen.queryByText('Waiting a second player')).toBeNull();
  });
});