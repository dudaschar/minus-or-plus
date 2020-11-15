import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NewMove from 'src/components/NewMove/NewMove';

import { StyledButton } from './styles/Button';
import { Controls, Container, MovesContainer } from './styles/Container';

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

  const handleAddition = addition => {
    const lastResult = moves[moves.length-1].resultingNumber;

    if (lastResult ===  1) {
      return handleEnd();
    }

    const newInitialNumber = lastResult + addition;
    const newResultingNumber = newInitialNumber / 3;
    
    const newMove = {
      player: 'player',
      initialNumber: newInitialNumber,
      addition,
      resultingNumber: newResultingNumber,
    };

    const computer = computerMove(newMove);

    setMoves([...moves, newMove, computer]);
  };

  const computerMove = (previousMove) => {
    const lastResult = previousMove.resultingNumber;

    if (lastResult ===  1) {
      return handleEnd();
    }

    const newAddition = choseAddition(lastResult);
    const newResultingNumber = (lastResult + newAddition) / 3;

    return {
      player: 'computer',
      initialNumber: lastResult,
      addition: newAddition,
      resultingNumber: newResultingNumber,
    };
  };

  const handleEnd = () => {
    alert('You won!');
  };

  return (
    <Container>
      <MovesContainer>
        {moves.map((item, index) => <NewMove key={`${item.player}-${index}`} content={item} />)}
      </MovesContainer>
      
      <Controls>
        <StyledButton
          variant="circle"
          onClick={() => handleAddition(-1)}
        >
          -1
        </StyledButton>
        <StyledButton
          variant="circle"
          onClick={() => handleAddition(0)}
        >
          0
        </StyledButton>
        <StyledButton
          variant="circle"
          onClick={() => handleAddition(1)}
        >
          +1
        </StyledButton>
      </Controls>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      query: context.query,
    }
  };
}

Game.propTypes = {
  query: PropTypes.shape({
    number: PropTypes.string,
  }).isRequired,
};

export default Game;