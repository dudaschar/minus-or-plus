import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Button from 'src/components/Button/Button';

import { Container } from './styles/Container';
import { ResultText } from './styles/Text';

function Result({ winner }) {
  const router = useRouter();
  const message = winner === 'player' ? 'You won!' : 'You lose!';

  const handleNewGame = (event) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <Container>
      <ResultText>{message}</ResultText>
      <Button
        color="white"
        onClick={handleNewGame}
      >
        Play Again
      </Button>
    </Container>
  );
}

Result.propTypes = {
  winner: PropTypes.string.isRequired,
};

export default Result;
