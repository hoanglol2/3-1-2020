var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users');

const PORT = process.env.PORT || 5000;
const router = require('./router');

io.on('connection', (socket) => {
  socket.on('join', ({nameYourSelf, room}, callback) => {
    const {user} = addUser({id: socket.id, name: nameYourSelf, room});

    socket.emit('message', {
      user: 'admin',
      text: `Xin chào ${user.name}, giờ đây bạn có thể nhắn tin rồi!!!`,
    });

    socket.broadcast
      .to(user.room)
      .emit('message', {user: 'admin', text: `${user.name}, đang xem tin...`});

    socket.join(user.room);

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {user: user.name, text: message});
    }

    callback();
  });

  socket.on('disconnect', () => {
    console.log('User had left!!!');
  });
});

app.use(router);
server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
