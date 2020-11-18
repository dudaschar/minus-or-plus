import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header/Header';

import { Container, ContentWrapper } from './styles/Container';

function GameContainer({ children, player }) {
  const playerName = player === 'player1' ? 'Cat' : 'E.T.';

  return (
    <Container>
      <Header name={playerName} />
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
}

GameContainer.propTypes = {
  children: PropTypes.node.isRequired,
  player: PropTypes.string.isRequired,
};

export default GameContainer;
