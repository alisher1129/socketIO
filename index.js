const http = require('http');
const express = require("express");
const path = require("path");
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

// app.use(express.static(path.resolve("./public")))
//socket.io
io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        io.emit("message", message);
    });
});

//http request 
app.get("/", (req, res) => {
    // res.sendFile("public/index.html")
    res.sendFile(path.join(__dirname, "public/index.html"));
})

server.listen(9000, () => console.log("Server Started at PORT:9000"))