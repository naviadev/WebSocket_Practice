const path = require('path');

module.exports = {
  entry: "./dist/socket.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js"
  }
}