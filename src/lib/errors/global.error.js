export const globalErrorHandler = (err, req, res, next) => {
    console.log(err.message, err.stack)
    if (err.isOperational === true) {
        return res.status(err.statusCode).json({
            message: err.message,
            success: false,
            stack: err.stack
        })
    }
    return res.status(500).json({
        message: "Something went wrong",
        success: false
    })
}