import { handleResult } from './result';

describe('handleResult', () => {
  it('should end the game if the last number is not integer', () => {
    const moves = [{
      player: 'player1',
      number: 6,
      addition: 1,
      nextNumber: 2.333,
    }];

    const hasGameFinished = handleResult(moves);

    expect(hasGameFinished).toBe(true);
  });

  it('should end the game if the last number is 1', () => {
    const moves = [{
      player: 'player1',
      number: 2,
      addition: 1,
      nextNumber: 1,
    }];

    const hasGameFinished = handleResult(moves);

    expect(hasGameFinished).toBe(true);
  });

  it('should not end the game if the last number is integer and different than 1', () => {
    const moves = [{
      player: 'player1',
      number: 18,
      addition: 0,
      nextNumber: 6,
    }];

    const hasGameFinished = handleResult(moves);

    expect(hasGameFinished).toBe(false);
  });
});