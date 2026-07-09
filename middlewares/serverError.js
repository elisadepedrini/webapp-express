const serverError = (err, req, res, next) => {
    res.status(500)
    res.json({
        error: "500",
        message: "Internal Server Error"
    })
}


module.exports = serverError