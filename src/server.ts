import express from 'express'
import {routes} from "./routes"
import {createServer} from 'http'
import { Server, Socket } from 'socket.io'
import "./database"

const app=express()

const http= createServer(app)
const io =new Server(http)

io.on("connection",(socket:Socket)=>{
    console.log("connected",socket.id);
    
})

app.use(express.json())
app.use(routes)

app.listen(3333,()=>console.log('running on port 3333'));


