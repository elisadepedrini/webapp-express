const express = require('express')
const app = express()
const port = process.env.API_SERVER_PORT || 3000
const connection = require('./database/connection')
const moviesRouter = require("./routes/moviesRouter")



app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.use('/movies_cover', moviesRouter)


app.get('/', (req, res) => {
    res.send('Hello World!')
})
