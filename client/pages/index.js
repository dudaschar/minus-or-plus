import React, { memo, useEffect, useState } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import Start from 'src/patterns/Start/Start';
import Game from 'src/patterns/Game/Game';
import Results from 'src/patterns/Result/Result';

import { choseAddition, createNewMove } from 'src/logic/moves';

function MinusOrPlus({ socket, player }) {
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const [number, setNumber] = useState('');
  const [startGame, setStartGame] = useState(false);
  const [initialMove, setInitialMove] = useState(null);
  const [nextPlayer, setNextPlayer] = useState(null);
  const [moves, setMoves] = useState([]);
  const [winner, setWinner] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    const lastResult = moves[moves.length - 1];
    if (lastResult && lastResult.nextNumber === 1) {
      setWinner(lastResult.player);
    }
  }, [moves]);

  const move = ({ nextPlayer, number }) => {
    setNumber(number);
    setNextPlayer(nextPlayer);
    if (type !== 'manual' && player === nextPlayer && number > 1) {
      const additionAuto = choseAddition(number);
      socket.emit('player move', { addition: additionAuto, number });
    }
  };

  useEffect(() => {
    const initialMoveListener = ({ number, nextPlayer }) => {
      setInitialMove(number);
      setStartGame(true);
      move({ nextPlayer, number });
    };

    const playerMoveListener = ({ addition, number, player, nextPlayer }) => {
      const newMove = createNewMove({ number, addition, player });

      setMoves((moves) => [...moves, newMove]);
      move({ nextPlayer, number: newMove.nextNumber, addition });
    };

    const restartGame = () => {
      Router.reload(window.location.pathname);
    };

    if (socket) {
      socket.on('number to start', initialMoveListener);
      socket.on('player move', playerMoveListener);
      socket.on('restart game', restartGame);
    }

    return () => {
      if (socket) {
        socket.off('number to start', initialMoveListener);
        socket.off('player move', playerMoveListener);
        socket.off('restart game', restartGame);
      }
    };
  }, [socket, player, type, number]);

  const handleNumberInput = ({ target }) => {
    const { value } = target;
    const resetValue = value === '' ? true : false;
    const inputValue = Number(value);

    if (resetValue) {
      return setNumber(value);
    }

    if (!inputValue) {
      return;
    }

    setNumber(inputValue);
  };

  const handleAddition = (addition) => {
    socket.emit('player move', { addition, number });
  };

  const handleStart = (type) => {
    socket.emit('number to start', number);
    setType(type);
  };

  const handleNewGame = (event) => {
    event.preventDefault();
    socket.emit('restart game');
  };

  useEffect(() => {
    setButtonEnabled(Boolean(number));
  }, [number]);

  return (
    <>
      {!startGame && (
        <Start
          number={number}
          handleNumberInput={handleNumberInput}
          isButtonEnabled={isButtonEnabled}
          handleStart={handleStart}
        />
      )}
      {startGame && initialMove && (
        <Game
          moves={moves}
          player={player}
          nextPlayer={nextPlayer}
          type={type}
          handleAddition={handleAddition}
        />
      )}
      {winner && (
        <Results
          winner={winner}
          player={player}
          handleNewGame={handleNewGame}
        />
      )}
    </>
  );
}

MinusOrPlus.defaultProps = {
  socket: {},
  player: undefined,
};

MinusOrPlus.propTypes = {
  socket: PropTypes.object,
  player: PropTypes.string,
};

export default memo(MinusOrPlus);
