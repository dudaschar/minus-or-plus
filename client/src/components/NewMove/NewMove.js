import React from 'react';
import PropTypes from 'prop-types';

import { CatIcon } from 'src/icons/cat';
import { EtIcon } from 'src/icons/et';

import { Move, MoveDetails } from './styles/Move';
import { Container, MoveWrapper, IconWrapper } from './styles/Container';

function NewMove({ content, currentPlayer }) {
  const { number, addition, nextNumber, player } = content;

  const isALocalMove = currentPlayer === player ? true : false;
  const isACatPlayer = player === 'player1';
  return (
    <Container isALocalMove={isALocalMove}>
      <IconWrapper>{isACatPlayer ? <CatIcon /> : <EtIcon />}</IconWrapper>
      <MoveWrapper isALocalMove={isALocalMove}>
        <Move>{addition}</Move>
        <MoveDetails>
          [({addition} + {number}) / 3] = {nextNumber}
        </MoveDetails>
        <MoveDetails>{nextNumber}</MoveDetails>
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
