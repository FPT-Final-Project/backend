// @ts-ignore
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import logger from './utils/logger';
import { PORT } from './configs';
import db from './configs/mongoose';
import routers from './routers';
import { handler, converter, routeNotFound } from './middlewares/error';

// const corsOptions = { methods: ['GET', 'POST', 'PUT', 'DELETE'] };
const app = express();

app.use(helmet());
// app.use(morgan('combined'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try {
  db.connect();
} catch (e) {
  console.log('could not connect');
}

/**
 * Main routes
 */
app.get('/version', (req: Request, res: Response) => res.json({ version: 1 }));
app.use('/v1', routers);

/**
 * Handle Error
 */
app.use(converter);
app.use(routeNotFound);
app.use(handler);

/**
 * Create Socket Listener
 */
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000', 'https://psycare.web.app'],
    methods: ['GET', 'POST'],
  },
});

const listUser: any[] = [];
io.on('connection', (socket: Socket) => {
  logger.info('Some one has joined joined.');
  socket.on('join-room', (appointmentId, userId, userName, peerId) => {
    logger.info(`${userId} is joining room: ${appointmentId}`);
    socket.join(appointmentId);
    socket.to(appointmentId).emit('user-connected', userId, userName, peerId);

    listUser.push({ id: userId, name: userName });
    io.to(appointmentId).emit('getUsersInRoom', listUser);
    socket.on('sendMessage', (message, callback) => {
      io.to(appointmentId).emit('message', { text: message, sendName: userName });
      callback();
    });

    socket.on('disconnect', () => {
      logger.info(`${userId} is disconnected`);
      socket.to(appointmentId).emit('user-disconnected', userId);
      listUser.splice(listUser.indexOf({ id: userId, name: userName }), 1);
    });
  });
});

httpServer.listen(PORT, () => {
  logger.info(`Server is listening on Port: ${PORT}`);
});
