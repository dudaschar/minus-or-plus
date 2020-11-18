import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  display: flex;
  padding-bottom: ${({ theme }) => theme.spacing.large};
  flex-direction: ${({ isALocalMove }) => !isALocalMove && css`row-reverse`};
`;

Container.propTypes = {
  isALocalMove: PropTypes.bool.isRequired,
};

Container.displayName = 'Container';

export const MoveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isALocalMove }) => !isALocalMove && css`flex-end`};
  padding: ${({ theme }) => `0 ${theme.spacing.medium}`};
  margin-right: ${({ theme, isALocalMove }) => isALocalMove && theme.spacing.huge};
  margin-left: ${({ theme, isALocalMove }) => !isALocalMove && theme.spacing.huge}};
  width: 100%;
`;

MoveWrapper.propTypes = {
  isALocalMove: PropTypes.bool.isRequired,
};

MoveWrapper.displayName = 'MoveWrapper';

export const IconWrapper = styled.div`
  flex-shrink: 0;
`;

IconWrapper.displayName = 'IconWrapper';
