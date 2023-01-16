require('dotenv').config()
let app = require("./src/app")

console.log(process.env.ADMIN_PASSWORD)

app.get("/", function (req, res) {
    res.status(200)
    res.render("index")
})

app.get("/login", function (req, res) {
    res.status(200)
    res.render("login")
})

app.get("/signup", function (req, res) {
    res.status(200)
    res.render("signup")
})



app.listen(4000, function () {
    console.log("Server is starting at port 4000")
})
