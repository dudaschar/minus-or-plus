import styled, { css } from 'styled-components';

const handleCircleButton = css`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

export const BaseButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  cursor: pointer;
  flex-basis: auto;

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.grayLight};
    cursor: not-allowed;
  }

  ${({ variant }) => variant ===  'circle' && handleCircleButton}
`;

BaseButton.displayName = 'BaseButton';
