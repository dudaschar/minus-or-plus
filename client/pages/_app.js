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
  const [player, setPlayer] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const playerListener = (player) => {
      setPlayer(player);
    };

    const startListener = (ready) => {
      setReady(ready);
    };

    const socket = socketIOClient(SERVER);
    setSocket(socket);

    socket.emit('player');
    socket.on('player', playerListener);
    socket.on('ready to start', startListener);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameContainer player={player}>
        {player && (
          <Component
            {...pageProps}
            socket={socket}
            player={player}
            ready={ready}
          />
        )}
      </GameContainer>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
