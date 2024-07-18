

const socket = io();

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("message", (message) => {
  const messages = document.getElementById("messages");
  const li = document.createElement("li");
  li.innerHTML = message;
  messages.appendChild(li);
});

const sendMessage = () => {
  console.log('야호')
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value.trim();
  if (message !== "") {
    socket.emit("test", message);
    messageInput.value = "";
  }
}
window.addEventListener('DOMContentLoaded', () => {

  const button = document.getElementById('submit');
  button.addEventListener('click', sendMessage);

})
