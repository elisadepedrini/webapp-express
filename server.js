const express = require('express')
const app = express()
const port = process.env.API_SERVER_PORT || 3000
const connection = require('./database/connection')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/movies_cover', (req, res) => {
    connection.query('SELECT * FROM movies', (err, results) => {
        if(err) {
            console.error('Error fetching movies:', err)
            return res.status(500).json({ error: true, message: "Internal Server Error" });
        }
        res.json(results)
    })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
