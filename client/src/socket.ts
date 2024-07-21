// client/src/index.ts
import { io, Socket } from "socket.io-client";
import sendMessage from "./event/sendMessage";

const socket: Socket = io();

socket.on("connect", () => {
  console.log("Connected to Server");
});

socket.on("message", (message) => {
  const messages: HTMLUListElement = document.getElementById("messages") as HTMLUListElement;
  const li: HTMLLIElement = document.createElement('li');
  li.innerHTML = message;
  messages.appendChild(li);
});

window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('submit') as HTMLButtonElement;
  button.addEventListener('click', () => sendMessage(socket));
});
