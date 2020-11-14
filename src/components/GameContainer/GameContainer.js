import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header/Header';

import { Container, ContentWrapper } from './styles/Container';

function GameContainer({ children }) {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        { children }
      </ContentWrapper>
    </Container>
  );
}

GameContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameContainer;
