import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: red;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryTransparent};
`;

Container.displayName = 'Container';