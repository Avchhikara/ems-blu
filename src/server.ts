import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import Routes from './routes';
import mongodb from './mongodb'

// Adding configurations to process.env
dotenv.config();
// Connecting to mongodb
mongodb.doConnect();

const app = express();

// Adding middlewares
app.use(bodyParser.json())

const PORT: string = process.env.PORT || "7890";

new Routes(app);

// start the Express server
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
