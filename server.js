const express = require('express')
const app = express()
const port = process.env.API_SERVER_PORT || 3000
const connection = require('./database/connection')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
