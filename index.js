const express = require("express")
const app = express()
const port = process.env.PORT || "5000"
const cors = require("cors")

// middle ware 
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("skerlty cyber server working")
})

app.listen(port, () => {
    console.log(`server working ${port}`)
})