const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
        return res.status(500).json({
            message: "Internal Server Error",
            errors: err.message
        });
    });
}

module.exports = catchAsync;