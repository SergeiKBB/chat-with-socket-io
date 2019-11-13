import Express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const app = Express();
const server = http.createServer(app);
const io = socketIo(server);

const { PORT } = process.env;

app.get('/', (req, res) => {
  res.send('Hello!')
});

io.on('connection', socket => {
  console.log('User is connected!');
  socket.emit('add message', {msg: "Hello"})
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT} port!`)
});
