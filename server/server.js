const io = require('socket.io')(5000)

connectedUsers = new Array();

const findIndexFromSocketID = (ID) => {
    for (let i = 0; i < connectedUsers.length; i++){
        if (connectedUsers[i].socketID === ID){
            return i;
        }
    }
    return null
}
const findIndexFromName = (name) => {
    for (let i = 0; i < connectedUsers.length; i++){
        if (connectedUsers[i].name === name){
            return i;
        }
    }
    return null
}


io.on('connection', socket=>{
    socket.on('send-chat-message', (message) => {
        // Find this socket's index.
        let index = findIndexFromSocketID(socket.id);
        let currentSocketObject = connectedUsers[index];
        let peerUsername = "";

        if (currentSocketObject.peerID.search("DATABASE") !== -1){
            // DATABASE HANDLING
            peerUsername = currentSocketObject.peerID.substring(8)
            io.to(socket.id).emit("you-chat-message", message)
            console.log(message + " IS BEING SENT TO " + peerUsername + "VIA DATABASE")
        }
        else if (currentSocketObject.socketID !== null){
            let peerID = connectedUsers[findIndexFromSocketID(socket.id)].peerID
            io.to(peerID).emit("chat-message", [message,currentSocketObject.name])
            io.to(socket.id).emit("you-chat-message", message)
            // DATABASE HANDLING TOO
            peerUsername = connectedUsers[findIndexFromSocketID(currentSocketObject.socketID)].name
            console.log(message = "IS BEING SENT TO" + peerUsername + " VIA ONLINE AND DATABASE WOOOO")
        }
        
    })
    socket.on('userConnected', (username) => {
        connectedUsers.push({name:username, socketID : socket.id, peerID: null})
    })
    socket.on("test", () => {
        console.log(connectedUsers)
    })

    socket.on("connectToUser", (userToConnectTo) => {
        let currentSocketIndex = findIndexFromSocketID(socket.id)
        let peerSocketIndex = findIndexFromName(userToConnectTo)
        if (!(peerSocketIndex == null || currentSocketIndex == null))
        {connectedUsers[currentSocketIndex].peerID = connectedUsers[peerSocketIndex].socketID}
        else{
            connectedUsers[currentSocketIndex].peerID = "DATABASE" + userToConnectTo
        }


    })

    socket.once('disconnect', () => {
        console.log(socket.id + " | DISCONNECTED")
        let tempArr = Array.from(connectedUsers)
        tempArr = connectedUsers.filter((object) => {
            console.log("==========================")
            console.log(object)
            console.log(object.socketID !== socket.id)
            console.log("==========================")
            return object.socketID !== socket.id
        })
        connectedUsers = Array.from(tempArr)
        console.log("NEW CONNCTED: ")
        console.log(connectedUsers)
    })
})  