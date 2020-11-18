import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Button from 'src/components/Button/Button';

import { Container } from './styles/Container';
import { ResultText } from './styles/Text';

function Result({
  winner,
  player,
  handleNewGame,
}) {
  const message = winner === player
    ? 'You won!'
    : 'You lose!';

  return (
    <>
      <Head>
        <title>{message} | Minus or Plus</title>
      </Head>
      <Container>
        <ResultText>{message}</ResultText>
        <Button
          color="white"
          onClick={handleNewGame}
        >
          Play Again
        </Button>
      </Container>
    </>
  );
}

Result.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
  player: PropTypes.string.isRequired,
  winner: PropTypes.string.isRequired,
};

export default Result;
