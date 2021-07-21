const jwt = require('jsonwebtoken');
const { AuthToken } = require('./../../database/schema/index')

class TokenService
{
    generateTokens(payload)
    {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload , process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})

        return {
            accessToken,
            refreshToken
        };

    }
    async saveToken(userId, refreshToken)
    {
        const token = await AuthToken.findOne({ where: { UserId: userId } });
        if (token){
            return await token.update({ token: refreshToken });
        }

        return await AuthToken.create({
            UserId: userId,
            token: refreshToken
        })

    }

    async removeToken(refreshToken){
        return AuthToken.destroy({where: {token: refreshToken}});
    }

    async validateAccessToken(token){
        try{
            return await jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        } catch (e) {
            return null;
        }
    }
    validateRefreshToken(token){
        try{
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        } catch (e) {
            return null;
        }
    }

    async findToken(refreshToken){
        return await AuthToken.findOne({where: {token: refreshToken}});
    }
}

module.exports = new TokenService();
