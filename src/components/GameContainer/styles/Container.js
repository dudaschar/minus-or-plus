import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  flex-direction: column;
`;

Container.displayName = 'Container';

export const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex: 1;
`;