import React from 'react';
import PropTypes from 'prop-types';

import { CatIcon } from  'src/icons/cat';

import { Move, MoveDetails } from './styles/Move';
import { Container, MoveWrapper, IconWrapper } from './styles/Container';

function NewMove({ content }) {
  const {
    initialNumber,
    addition,
    resultingNumber
  } = content;

  return (
    <Container>
      <IconWrapper>
        <CatIcon />
      </IconWrapper>
      <MoveWrapper>
        <Move>{addition}</Move>
        <MoveDetails>
          [({addition} + {initialNumber}) / 3] = {resultingNumber}
        </MoveDetails>
        <MoveDetails>
          {resultingNumber}
        </MoveDetails>
      </MoveWrapper>
    </Container>
  );
}

NewMove.propTypes = {
  content: PropTypes.shape({
    initialNumber: PropTypes.number,
    addition: PropTypes.number,
    resultingNumber: PropTypes.number,
  }),
};

export default NewMove;
