import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server as SocketIOServer } from 'socket.io';
import path from 'path';

const app = express();
const server = createServer(app);
const io = new SocketIOServer(server);

io.on('connection', (socket) => {
  console.log('online');

  socket.on('disconnect', () => {
    console.log('offline')
  });

  socket.on('test', (msg: any) => {
    console.log(msg)
    io.emit('message', msg)
  });

});

app.use(express.static(path.join(__dirname, '../../client/dist')));
console.log(__dirname, '../client/dist');
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/client/dist/index.html");
});

server.listen(3000, () => { console.log('http://localhost:3000') })