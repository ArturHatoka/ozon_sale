const ApiError = require('./../exeptions/apiError')

module.exports = (err, req, res, next) =>
{
    // console.log(err, 'middleware');
    if (err instanceof ApiError){
        return res.status(err.status).json({
            message: err.message,
            errors: err.errors,
        })
    }

    return res.status(500).json({
        message: 'Непредвиденная ошибка => ' + err,
        errors: err.errors
    })
}
