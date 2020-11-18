export const choseAddition =  number => {
  if ((number - 1) % 3 === 0) {
    return -1;
  } else if (number % 3 === 0) {
    return 0;
  } else if ((number + 1) % 3 === 0) {
    return 1;
  }
};

export const createNewMove = ({number, addition, player}) => {
  const nextNumber = (number + addition) / 3;
  return {
    player,
    number,
    addition,
    nextNumber,
  };
};