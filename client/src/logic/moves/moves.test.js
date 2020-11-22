import { choseAddition, createNewMove } from './moves';

describe('Moves related logic', () => {
  describe('choseAddition', () => {
    it.each(
      [[6, 0], [19, -1], [58, -1], [459, 0], [146, 1]]
    )('return the correct addition to each number', (number, addition) => {
      const result = choseAddition(number);

      expect(result).toBe(addition);
    });
  });

  describe('createNewMove', () => {
    it('should create a new move object', () => {
      const newMove = createNewMove({number: 6, addition: 0, player: 'player1'});
      const expectedNewMove = {
        player: 'player1',
        number: 6,
        addition: 0,
        nextNumber: 2,
      };

      expect(newMove).toStrictEqual(expectedNewMove);
    });
  });
});