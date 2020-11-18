import React from 'react';
import PropTypes from 'prop-types';

import { CatIcon } from  'src/icons/cat';

import { Move, MoveDetails } from './styles/Move';
import { Container, MoveWrapper, IconWrapper } from './styles/Container';

function NewMove({ content, currentPlayer }) {
  const {
    number,
    addition,
    nextNumber,
    player,
  } = content;

  const isALocalMove = currentPlayer === player ? true : false;

  return (
    <Container isALocalMove={isALocalMove}>
      <IconWrapper>
        <CatIcon />
      </IconWrapper>
      <MoveWrapper isALocalMove={isALocalMove}>
        <Move>{addition}</Move>
        <MoveDetails>
          [({addition} + {number}) / 3] = {nextNumber}
        </MoveDetails>
        <MoveDetails>
          {nextNumber}
        </MoveDetails>
      </MoveWrapper>
    </Container>
  );
}

NewMove.propTypes = {
  content: PropTypes.shape({
    number: PropTypes.number,
    addition: PropTypes.number,
    nextNumber: PropTypes.number,
    player: PropTypes.string,
  }).isRequired,
  currentPlayer: PropTypes.string,
};

export default NewMove;
