import styled from 'styled-components';

export const Move = styled.p`
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  line-height: 3.5rem;
  text-align: center;
  border-radius: 50%;
`;

Move.displayName = 'Move';

export const MoveDetails = styled.p`
  background-color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => `${theme.spacing.small} 0`};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  width: 100%;
  box-shadow: 0px 1px 2px ${({ theme }) => theme.colors.grayLight};
`;

MoveDetails.displayName = 'MoveDetails';
