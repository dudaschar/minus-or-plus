import React from 'react';
import PropTypes from 'prop-types';

import { CatIcon } from  'src/icons/cat';

import { Nav } from './styles/Nav';
import { TextBlock } from './styles/TextBlock';

function Header({ name }) {
  return (
    <Nav>
      <CatIcon />
      <TextBlock>
        <h3>{name}</h3>
        <p>Try to beat your adversary!</p>
      </TextBlock>
    </Nav>
  );
}

Header.defaultProps = {
  name: 'Alice',
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
