import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'stylesUtils/globalStyles';
import theme from 'stylesUtils/theme';

import GameContainer from 'src/components/GameContainer/GameContainer';

const SERVER = 'http://localhost:8080';

function App({ Component, pageProps }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = socketIOClient(SERVER);
    setSocket(socket);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameContainer>
        <Component {...pageProps} socket={socket} />
      </GameContainer>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
