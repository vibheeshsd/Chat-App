import express, { json } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from "path";
// import cors from 'cors'

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDb from './Db/connectToMongoDb.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
// app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)



app.use(express.static(path.join(__dirname, "/client/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"client", "dist", "index.html"))
})

// app.get("/" , (req, res)=>{
    // root route http://localhost:5000/
//     res.send("Hello World!")
// })


server.listen(PORT, () =>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
})