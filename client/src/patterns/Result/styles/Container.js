import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryTransparent};
`;

Container.displayName = 'Container';