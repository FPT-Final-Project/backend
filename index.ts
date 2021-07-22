import express, { Express } from "express"
import routes from "./src/routers"
import { createServer } from "http";
import { Server, Socket } from "socket.io";
const app: Express = express()
const port = 5000;
const httpServer = createServer(app);
const cors = require("cors");

const io = new Server(httpServer, {});
let i  = 1;
let listUser: any[] = []
io.on("connection", (socket: Socket) => {
	if(i < 3){
		socket.on('join-room', (roomId, userId, peerId) => {
			console.log(`${userId} da join vao room ${roomId}`)
			i = i + 1
			socket.join(roomId)
			socket.to(roomId).emit('user-connected', userId, peerId)
			listUser.push(userId);
			io.to(roomId).emit('getUsersInRoom',listUser);
			socket.on('sendMessage', (message,callback) => {
				io.to(roomId).emit('message', { text: message, userid: userId })
				callback();
			})
			socket.on('disconnect', (userid) => {
				socket.to(roomId).emit('user-disconnected', userId)
				listUser.splice(listUser.indexOf(userid), 1);
				i = i - 1
			})
		})
	}
})

app.use(routes)
app.use(cors());

httpServer.listen(port, () => {
	console.log('Server listening on Port 5000');
})