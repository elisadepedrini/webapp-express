const express = require('express')
const app = express()
const port = process.env.API_SERVER_PORT || 3000
const connection = require('./database/connection')
const moviesController = require('./controllers/moviesController')


app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/movies_cover', moviesController.index)
app.get('/movies_cover/:id', moviesController.show)


app.get('/', (req, res) => {
    res.send('Hello World!')
})
