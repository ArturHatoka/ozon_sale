const { Users } = require('./../../database/schema/index')
const bcript = require('bcrypt');
const tokenService = require('./tokenService');
const authDti = require('./../../dtos/authDto');
const apiError = require('./../../exeptions/apiError')

class AuthService
{
    async register(name, password)
    {
        const user = await Users.findOne({ where: { name: name }});
        if (user){
            throw apiError.badRequest(`Пользователь с именем ${name} уже существует`);
        }
        const newUser =  await Users.create({
            name: name,
            password: await bcript.hash(password, 3),
        })
        const userDto = new authDti(newUser);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(newUser.id, tokens.refreshToken);

        return({
            ...tokens,
            user: userDto
        })
    }
    async login(name, password)
    {
        const user = await Users.findOne({ where: { name: name }});
        if (!user){
            throw apiError.badRequest(`Пользователь с именем ${name} не найден`);
        }
        if (!bcript.compareSync(password, user.password)){
            throw apiError.badRequest(`Неверный пароль`);
        }
        const userDto = new authDti(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(user.id, tokens.refreshToken);

        return({
            ...tokens,
            user: userDto
        })
    }
    // async logout(refreshToken)
    // {
    //     return await tokenService.removeToken(refreshToken);
    // }
    async refresh(refreshToken)
    {
        if (!refreshToken){
            throw apiError.unauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const findToken = await tokenService.findToken(refreshToken);
        if (!userData && !findToken){
            throw apiError.unauthorizedError();
        }

        const user = await Users.findByPk(userData.id);
        const userDto = new authDti(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(user.id, tokens.refreshToken);

        return({
            ...tokens,
            user: userDto
        })
    }

    async getUsers(){
        return await Users.findAll();
    }
}

module.exports = new AuthService();