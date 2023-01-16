let server = require("./serverHttp")
let express = require("express")
let app = express(server)

let bodyParser = require("body-parser")
let cookieParser = require("cookie-parser")
let session =  require("express-session")


app.set("view engine", "ejs")
app.set("views", "views")

app.use("/assets", express.static("public"))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())



module.exports = app
















