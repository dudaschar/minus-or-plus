import styled from  'styled-components';

import Button from 'src/components/Button/Button';

export const StyledButton = styled(Button)`
  margin: ${({ theme }) => `0 ${theme.spacing.small}`};
`;

StyledButton.displayName = 'StyledButton';
