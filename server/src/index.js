const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const httpServer = http.createServer(app);
const io = socketIo(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

httpServer.listen(8080, () => {
  console.log('listening on *:8080');
});

let player1Socket = null;
let player2Socket = null;

io.on('connection', (socket) => {
  console.log('connected');
  let player;

  if (player1Socket === null) {
    player1Socket = socket;
    player = 'player1';
  } else if (player2Socket === null) {
    player2Socket = socket;
    player = 'player2';
  }

  const ready = Boolean(player1Socket) && Boolean(player2Socket);

  if (ready) {
    io.emit('ready to start', true);
  }

  socket.emit('player', player);

  socket.on('player', () => {
    socket.emit('player', player);
    console.log('player', { player });
  });

  socket.on('number to start', (number) => {
    console.log('number to start', { number });
    const nextPlayer = socket === player1Socket ? 'player2' : 'player1';
    io.emit('number to start', { number, nextPlayer });
  });

  socket.on('player move', ({ addition, number }) => {
    console.log('player move', { addition, number });
    const nextPlayer = socket === player1Socket ? 'player2' : 'player1';
    io.emit('player move', { addition, number, player, nextPlayer });
  });

  socket.on('restart game', () => {
    console.log('restart game');
    io.emit('restart game');
  });

  socket.on('disconnect', () => {
    console.log('disconnected', { player });
    if (player === 'player1') {
      player1Socket = null;
    } else if (player === 'player2') {
      player2Socket = null;
    }

    io.emit('ready to start', false);
  });
});
