import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

Container.displayName = 'Container';

export const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
`;