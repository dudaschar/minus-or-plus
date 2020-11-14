import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'stylesUtils/globalStyles';
import theme from 'stylesUtils/theme';

import GameContainer from 'src/components/GameContainer/GameContainer';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameContainer>
        <Component {...pageProps} />
      </GameContainer>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
