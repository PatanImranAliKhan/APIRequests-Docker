const express = require('express')

const app = express();

app.use(express.json())

app.get("/", (req,res)  => {
    res.send("Hello User")
})

app.get("/admin", (req,res) => {
    res.send("Hello Admin")
})

app.listen(3000, () => {
    console.log("app running on 3000");
})