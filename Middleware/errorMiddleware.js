const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    res.json({ message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : "Error" })
}

module.exports = errorMiddleware;