import express, { Express } from "express"
import routes from "./src/routers"
import { createServer } from "http";
import { Server, Socket } from "socket.io";
const { ExpressPeerServer } = require('peer');
const app: Express = express()
const port = 5000;
const httpServer = createServer(app);
const cors = require("cors");

const peerServer = ExpressPeerServer(httpServer, {
	debug: true,
});

const io = new Server(httpServer, {  
	cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

let i  = 1;
io.on("connection", (socket: Socket) => {
	console.log('Socket da ket noi')
	if(i < 3){
		socket.on('join-room', (roomId, userId) => {
			i = i + 1
			socket.join(roomId)
			socket.to(roomId).emit('user-connected', userId,i)
			socket.on('sendMessage', (message,callback) => {
				socket.to(roomId).emit('message', message, userId)
				callback();
			})
			socket.on('disconnect', () => {
				socket.to(roomId).emit('user-disconnected', userId)
				i = i - 1
			})
		})
	}
})

app.use(routes)
app.use('/peerjs', peerServer)
app.use(cors());

httpServer.listen(port, () => {
	console.log('Server listening on Port 5000');
})