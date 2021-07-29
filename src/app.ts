import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { PORT } from './configs';
import db from './configs/mongoose';
import routers from './routers';
import { handler, converter, routeNotFound } from './middlewares/error';

const corsOptions = { methods: ['GET', 'POST', 'PUT', 'DELETE'] };
const app = express();

/**
 * Create Socket Listener
 */
const httpServer = createServer(app);
const io = new Server(httpServer, {});
let i = 1;
const listUser: any[] = [];
io.on('connection', (socket: Socket) => {
  if (i < 3) {
    socket.on('join-room', (roomId, userId, peerId) => {
      console.log(`${userId} is joined room: ${roomId}`);
      i += 1;
      socket.join(roomId);
      socket.to(roomId).emit('user-connected', userId, peerId);

      listUser.push(userId);
      io.to(roomId).emit('getUsersInRoom', listUser);
      socket.on('sendMessage', (message, callback) => {
        io.to(roomId).emit('message', { text: message, userid: userId });
        callback();
      });

      socket.on('disconnect', (userid) => {
        socket.to(roomId).emit('user-disconnected', userId);
        listUser.splice(listUser.indexOf(userid), 1);
        i -= 1;
      });
    });
  }
});

app.use(helmet());
app.use(morgan('combined'));
app.use(cors(corsOptions));
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

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

httpServer.listen(5000, () => {
  console.log('Socket listening on Port 5000');
});
