const notFound = (req, res, next) => {
    res.status(404)
    res.json({
        error: "404",
        message: "Movie not found"
    })
}

module.exports = notFound