import { io, Socket } from "socket.io-client";

const sendMessage = () => {
  const socket: Socket = io();
  const messageInput = document.getElementById("messageInput") as HTMLInputElement;
  const message = messageInput.value.trim();
  if (message !== "") {
    socket.emit("test", message);
    messageInput.value = "";
  }
}

export default sendMessage;