import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-bottom: ${({ theme }) => theme.spacing.large};
`;

Container.displayName = 'Container';

export const MoveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `0 ${theme.spacing.medium}`};
  margin-right: ${({ theme }) => theme.spacing.huge};
  width: 100%;
`;

MoveWrapper.displayName = 'MoveWrapper';

export const IconWrapper = styled.div`
  flex-shrink: 0;
`;

IconWrapper.displayName = 'IconWrapper';
