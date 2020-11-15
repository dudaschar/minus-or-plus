import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import NewMove from 'src/components/NewMove/NewMove';
import Results from 'src/components/Result/Result';

import { StyledButton } from './styles/Button';
import { Controls, Container, MovesContainer } from './styles/Container';

function Game({ query }) {
  const { number } = query;
  const [winner, setWinner] = useState(null);

  const choseAddition =  number => {
    if ((number - 1) % 3 === 0) {
      return -1;
    } else if (number % 3 === 0) {
      return 0;
    } else if ((number + 1) % 3 === 0) {
      return 1;
    }
  };

  const computerMove = (lastResult) => {
    if (lastResult ===  1) {
      return setWinner('player');
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
  const initialMove = computerMove(Number(number));
  const [moves, setMoves] = useState([initialMove]);

  useEffect(() => {
    if ((moves[moves.length-1].resultingNumber === 1) && (moves[moves.length-1].player === 'computer')) {
      setWinner('computer');
    }
  }, [moves]);

  const handleAddition = addition => {
    const lastResult = moves[moves.length-1].resultingNumber;
    const newInitialNumber = lastResult + addition;
    const newResultingNumber = newInitialNumber / 3;
    
    const newMove = {
      player: 'player',
      initialNumber: newInitialNumber,
      addition,
      resultingNumber: newResultingNumber,
    };

    const computer = computerMove(newMove.resultingNumber);

    if (computer) {
      setMoves([...moves, newMove, computer]);
    } else {
      setMoves([...moves, newMove]);
    }
  };

  
  return (
    <Container>
      {winner && (<Results winner={winner} />)}
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