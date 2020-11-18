import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
`;

Container.displayName = 'Container';
