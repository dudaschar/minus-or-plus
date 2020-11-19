import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import NewMove from 'src/components/NewMove/NewMove';

import { StyledButton } from './styles/Button';
import { Controls, Container, MovesContainer } from './styles/Container';

function Game({ moves, player, type, handleAddition, nextPlayer }) {
  const shouldHaveControls = type === 'manual' && player === nextPlayer;

  return (
    <>
      <Head>
        <title>Minus or Plus</title>
      </Head>
      <Container>
        <MovesContainer>
          {moves.map((item, index) => (
            <NewMove
              key={`${item.player}-${index}`}
              content={item}
              currentPlayer={player}
            />
          ))}
        </MovesContainer>

        <Controls shouldHaveControls={shouldHaveControls}>
          <StyledButton variant='circle' onClick={() => handleAddition(-1)}>
            -1
          </StyledButton>
          <StyledButton variant='circle' onClick={() => handleAddition(0)}>
            0
          </StyledButton>
          <StyledButton variant='circle' onClick={() => handleAddition(1)}>
            +1
          </StyledButton>
        </Controls>
      </Container>
    </>
  );
}

Game.defaultProps = {
  nextPlayer: undefined,
  player: undefined,
  type: undefined,
};

Game.propTypes = {
  handleAddition: PropTypes.func.isRequired,
  moves: PropTypes.array.isRequired,
  player: PropTypes.string,
  type: PropTypes.string,
  nextPlayer: PropTypes.string,
};

export default Game;
