import { io, Socket } from "socket.io-client";
import sendMessage from "./event/sendMessage";

const socket: Socket = io();

//연결
socket.on("connect", () => {
  console.log("Connected Server");
})

//Server로 들어온 message
socket.on("message", (message) => {
  const messages: HTMLUListElement = document.getElementById("messages") as HTMLUListElement;
  const li: HTMLLIElement = document.createElement('li');
  li.innerHTML = message;
  messages.appendChild(li);
})

window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('submit') as HTMLButtonElement;
  button.addEventListener('click', sendMessage);
})