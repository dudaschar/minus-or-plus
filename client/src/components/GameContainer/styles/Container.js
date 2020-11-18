import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  position: relative;
  justify-content: center;
`;

Container.displayName = 'Container';

export const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex: 1;
  flex-shrink: 0;
  margin-top: 5.75rem;
  max-width: 470px;
`;

ContentWrapper.displayName = 'ContentWrapper';
