import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.small};
`;

Text.displayName = 'Text';
