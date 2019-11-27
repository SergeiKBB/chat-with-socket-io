import Express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import cors from 'cors';
import passport from 'passport';
import BearerStrategy from 'passport-http-bearer';
import mongoose from 'mongoose';
import UserModel from './src/models/user.model';
import router from "./src/routers";

const app = Express();
const server = http.createServer(app);
const io = socketIo(server);

dotenv.config();

const { PORT, NODE_ENV, MONGO_URL, TOKEN_KEY } = process.env;

mongoose.connect(MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log('Connecting to mongoose is successful'))
  .catch(error => console.error(error));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passport.use(new BearerStrategy((token, done) => {
  UserModel.findOne({ token }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);
    return done(null, user, { scope: 'all' });
  })
}));

if (NODE_ENV === 'dev') {
  app.use(errorHandler())
}

app.use(router);

io.on('connection', socket => {
  console.log('User is connected!');
  socket.emit('add message', {msg: "Hello"})
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT} port!`)
});
