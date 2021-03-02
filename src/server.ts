import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import http from 'http';
import Routes from './routes';
import mongodb from './mongodb'
import { Socket } from "dgram";

// Todo: Add feature for saving entry logs which can then be shown to the user

// Adding configurations to process.env
dotenv.config();
// Connecting to mongodb
mongodb.doConnect();

const app = express();
const server = http.createServer(app);
const io: Socket = require("socket.io")(server);

io.on('connection', (socket) => {
    console.log("User is connected");

})

// Adding middlewares
app.use(bodyParser.json())
// Adding a static directory
app.use(express.static("static"))

const PORT: string = process.env.PORT || "7890";

new Routes(app, io);

// start the Express server
server.listen(PORT, () => {
    console.log(`server started at PORT: ${PORT}`);
});
