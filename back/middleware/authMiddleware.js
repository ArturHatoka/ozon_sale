const ApiError = require('./../exeptions/apiError')
const tokenService = require('./../services/auth/tokenService')

module.exports = async (req, res, next) =>
{
    try {

        const authHeader = req.headers.authorization;
        // console.log(req.headers)
        if (!authHeader){
            return next( ApiError.unauthorizedError() );
        }

        const accessToken = authHeader.split(' ')[1];
        if (!accessToken){
            return next( ApiError.unauthorizedError() );
        }

        const userData = await tokenService.validateAccessToken(accessToken);
        if (!userData){
            // console.log('ERROR___' + userData)
            return next( ApiError.unauthorizedError() );
        }

        req.user = userData;
        next();

    } catch (e) {
        return next( ApiError.unauthorizedError() );
    }
}
