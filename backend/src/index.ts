import express from "express"
import {createServer} from "http"
import { Server, Socket } from "../node_modules/socket.io/dist/index"

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

io.on("connection", (socket:Socket) => {
    socket.on("error", (err) => console.log(err))

    socket.on("event:message", (msg : {message: string}) => {
        console.log(`${socket.id} sent a message: ${msg}`)
    })
})

httpServer.listen(5001, () => console.log("Server running on port: 5001"))
