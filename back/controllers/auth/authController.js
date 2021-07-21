// const AuthModel = require('../../models/auth/auth');
const authService = require('./../../services/auth/authService');
const tokenService = require('./../../services/auth/tokenService');
const { validationResult } = require('express-validator');
const apiError = require('./../../exeptions/apiError')

class AuthController
{
    async register(req, res, next)
    {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()){
                return next( apiError.badRequest('Ошибка при валидации', errors.array()) )
            }

            const { name, password } = req.body;
            const data = await authService.register(name, password);
            res.cookie('refreshToken', data.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, });

            return res.json(data);

        } catch (e) {
            next(e);
        }
    }
    async login(req, res, next){
        try {
            const { name, password } = req.body;
            const data = await authService.login(name, password);
            res.cookie('refreshToken', data.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });


            return res.json(data);

        } catch (e) {
            next(e);
        }
    }
    async logout(req, res, next){
        try {
            const { refreshToken } = req.cookies;
            // const token = await authService.logout(refreshToken);
            const token = await tokenService.removeToken( refreshToken );
            res.clearCookie('refreshToken')
            return res.json(token);

        } catch (e) {
            next(e);
        }
    }
    async refresh(req, res, next){
        try {
            const { refreshToken } = req.cookies;
            // console.log(req.cookies)
            const data = await authService.refresh(refreshToken);
            // console.log(data.accessToken)
            res.cookie('refreshToken', data.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, });

            return res.json(data);

        } catch (e) {
            next(e);
        }
    }
    async getUsers(req, res, next){
        try {
            const users = await authService.getUsers();
            return res.json(
                users
            );

        } catch (e) {
            next(e);
        }
    }

}


module.exports = new AuthController();
