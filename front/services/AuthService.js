// // import $api from "../plugins/api";
// import request from './../modules/request';

export default class AuthService
{
    static async login(axios, data) {
        return await axios.post('auth/login', {
            name: data.inputName,
            password: data.inputPassword,
        })
    }

    static async register(data)
    {
        return await axios.post('auth/register', {
            name: data.inputName,
            password: data.inputPassword,
        })
    }

    static async logout(data)
    {
        return await axios.post('auth/logout')
    }

    static async getUsers()
    {
        return await axios.get('auth/users')
    }

    // use default axios
    static async checkAuth(axios)
    {
        return await axios.post('auth/refresh', { withCredentials: true })
        this.$cookies.set('token', response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
        console.log('Success...');
    }


}