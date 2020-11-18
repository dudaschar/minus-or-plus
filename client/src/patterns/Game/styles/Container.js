import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:  100%;
`;

Container.displayName = 'Container';

export const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

MovesContainer.displayName = 'MovesContainer';

export const Controls = styled.div`
  display: ${({ shouldHaveControls }) => shouldHaveControls ? 'flex' : 'none'};
  justify-content: center;
`;

Controls.propTypes = {
  shouldHaveControls: PropTypes.bool.isRequired,
};

Controls.displayName = 'Controls';
