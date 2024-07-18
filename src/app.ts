import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";


const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html");
})

server.listen(3000, ()=>{console.log('http://localhost:3000')})