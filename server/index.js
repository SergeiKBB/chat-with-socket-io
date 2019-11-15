import Express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bcrypt from 'bcrypt';
import passport from 'passport';
import BearerStrategy from 'passport-http-bearer';
import mongoose from 'mongoose';
import UserModel from './models/user';


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


app.post('/', passport.authenticate('bearer', { session: false }), async (req, res) => {
  res.send('hello');
});

app.get('/users', (req, res) => {});

app.get('/users/:id', (req, res) => {});

app.post('/users', async (req, res) => {
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const newUser = new UserModel({email, hash, salt});
    await newUser.save();
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post('/users/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({email}, async (error, user) => {
    if (error) res.send(error);
    if (!user) res.status(404).send('User is not found');
    const token = jwt.sign({ id: user._id.toString() }, TOKEN_KEY, { expiresIn: '1h' });
    const isLoggedIn = await bcrypt.compare(password, user.hash);
    if (isLoggedIn) res.send(token);
    else res.status(404).send('Incorrect login or password');
  })
});

io.on('connection', socket => {
  console.log('User is connected!');
  socket.emit('add message', {msg: "Hello"})
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT} port!`)
});
