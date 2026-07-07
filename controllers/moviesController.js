const connection = require('../database/connection')


const index = (req, res) => {
    connection.query('SELECT * FROM movies', (err, results) => {
        if(err) {
            console.error('Error fetching movies:', err)
            return res.status(500).json({ error: true, message: "Internal Server Error" });
        }
        res.json(results)
    })
}


const show = (req, res) => {
    const id = parseInt(req.params.id)

    connection.query('SELECT * FROM movies WHERE id = ?', [id], (err, results) => {
        if(err) {
            console.error('Error fetching movie:', err)
            return res.status(500).json({ error: true, message: "Internal Server Error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: true, message: "Movie not found" });
    }

    const movie = results[0]
    // res.json(movie)

        connection.query('SELECT * FROM reviews WHERE movie_id = ?', [id], (err, reviews) => {
            if(err) {
                console.error('Error fetching reviews:', err)
                return res.status(500).json({ error: true, message: "Internal Server Error" });
            }

            res.json({ ...movie, reviews })
        })
    })
}



module.exports = {
    index,
    show
}