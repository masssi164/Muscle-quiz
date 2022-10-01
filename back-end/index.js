const express =require("express")
var app =express()
const helmet =require("helmet")
const cors =require("cors")

app.use(cors())
app.use(helmet)
express.urlencoded({
    extended:false
})
express.json(true)


app.listen(123,() => {
    console.log("server is running :)")
})

