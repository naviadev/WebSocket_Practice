import { Socket } from "socket.io-client";

const sendMessage = (socket: Socket) => {
  const messageInput = document.getElementById("messageInput") as HTMLInputElement;
  const message = messageInput.value.trim();
  if (message !== "") {
    socket.emit("test", message);
    messageInput.value = "";
  }
};

export default sendMessage;
