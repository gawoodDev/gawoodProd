let app = require("./app")

let io = require("socket.io")

io.on("connection", (socket) => {
    
    console.log("Welcom ", socket.id)
    
})

