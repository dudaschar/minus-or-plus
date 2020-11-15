import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 2px ${({ theme }) => theme.colors.gray};
  position: fixed;
  width: 100%;
  z-index: 100;
`;

Nav.displayName = 'Nav';