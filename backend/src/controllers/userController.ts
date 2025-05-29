import { Socket } from "../../node_modules/socket.io/dist/socket"
import nanoid from "nanoid"

export type User = {
    name: string,
    socket: Socket
}

class UserControllers {
    private users: User[]
    private users_queue: string[]

    constructor() {
        this.users = []
        this.users_queue = []
    }

    addUser = (newUser: User) => {
        this.users.push(newUser)
        this.users_queue.push(newUser.socket.id)
        this.clearQueue()
    }

    removeUser = (socketId: string) => {
        this.users.filter(user => user.socket.id != socketId)
        this.users_queue.filter(socketID => socketID != socketId)
    }

    clearQueue = () => {
        if (this.users_queue.length < 2) {
            return
        }

        const user1 = this.users.find(user => user.socket.id === this.users_queue.pop())

        const user2 = this.users.find(user => user.socket.id === this.users_queue.pop())

        user1?.socket.emit("event:new-room", {
            type: "send-offer",
            roomID: nanoid()
        })

    }
}

const userControllers = new UserControllers()

export { userControllers }