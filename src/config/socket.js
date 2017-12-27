import socket from 'socket.io';

export default server => {
  const io = socket(server);

  io.on('connection', socket => {
    socket.on('send message', function(data) {
      io.emit('recive message', data);
    });
  });
};
