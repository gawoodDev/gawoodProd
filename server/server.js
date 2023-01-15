let app = require("./src/app")


app.get("/", function (req, res) {
    res.status(200)
    res.render("index")
})




app.listen(4000, function () {
    console.log("Server is starting at port 4000")
})
