const express = require('express');
const socket = require('socket.io');
const app = express();
const server = app.listen(3000, () => {
	console.log('Listening to port 3000');
});
app.use(express.static('public'));

app.get('/chat', (req, res) => {
	res.sendFile('public/chat/chat.html', { root: '/home/runner/CyberChat' });
});

const io = socket(server);

io.on('connection', socket => {
  socket.on("chat", (chat) => {
    io.sockets.emit("chat", chat);
  })
});
