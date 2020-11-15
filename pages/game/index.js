import React, { useState } from 'react';

import NewMove from 'src/components/NewMove/NewMove';

function Game({ query }) {
  const { number } = query;

  const choseAddition =  number => {
    if ((number - 1) % 3 === 0) {
      return -1;
    } else if (number % 3 === 0) {
      return 0;
    } else if ((number + 1) % 3 === 0) {
      return 1;
    }
  };

  const initialNumber = Number(number);
  const addition = choseAddition(number);
  const resultingNumber = (initialNumber + addition) / 3;

  const move = {
    player: 'computer',
    initialNumber,
    addition,
    resultingNumber,
  };

  const [moves, setMoves] = useState([move]);


  return (
    moves.map((item, index) => <NewMove key={`${item.player}-${index}`} content={item} />)
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      query: context.query,
    }
  };
}

export default Game;