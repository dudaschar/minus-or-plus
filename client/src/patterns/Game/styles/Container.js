import styled from 'styled-components';

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
  display: flex;
  justify-content: center;
`;

Controls.displayName = 'Controls';
