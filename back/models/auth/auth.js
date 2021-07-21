const connect = require('../../core/connectDatabase');
const bcrypt = require('bcrypt');

const { User,AuthToken } = require('../../database/schema/index');

const { generateToken } = require('../../services/auth/tokenService');
//
//
// exports.register = async  (data, cb) =>
// {
//     User.findOne({
//         where: {
//             name: data.name
//         }
//     }).then(user => {
//         if (!user)
//         {
//             bcrypt.hash(data.password, 10, (err, hash) =>
//             {
//                 User.create({
//                     name: data.name,
//                     password: hash,
//                 })
//                     .then(user => {
//                         cb(user)
//                     })
//                     .catch(error => {
//                         cb(null, error)
//                     })
//             })
//         }
//         else{
//             cb(null, 'Пользователь уже существует ');
//         }
//     }).catch(error => {
//         cb(null, error)
//     })
// };
//
// exports.login = async  (data, res, cb) =>
// {
//     User.findOne({
//         where: {
//             name: data.name
//         }
//     }).then(user =>
//     {
//         if (!user){
//             cb(null, 'Пользователь не найден');
//         }
//
//         if (bcrypt.compareSync(data.password, user.password))
//         {
//             // const authToken = generateToken(user.id);
//             // res.cookie('token', '228', {})
//
//             // res.cookie('token', authToken, {
//             // maxAge: 1000 * 60 * 15, // would expire after 15 minutes
//             //     httpOnly: true, // The cookie only accessible by the web server
//             // signed: true // Indicates if the cookie should be signed
//             // });
//             cb( { token: generateToken(user.id) } )
//         }
//         else{
//             cb(null, 'Неверный пароль');
//         }
//
//     }).catch(error => {
//         cb(null, error);
//     })
// };
//
//
// exports.logout =  (data, cb) =>
// {
//     const destroy = AuthToken.destroy({
//         where: {
//             token: data.token
//         }
//     });
//     if ( destroy ){
//         cb(destroy)
//     } else{
//         cb(null, 'Error destroy')
//     }
//
// };
// exports.checkCookie =  (data, cb) =>
// {
//     AuthToken.findOne({
//         where: {
//             token: data.token
//         }
//     }).then( token =>
//     {
//         if (!token){
//             cb({ token: false });
//         }
//         if (token){
//             // cb(token.name);
//             cb({ token: true });
//         }
//     }).catch( error => {
//         cb(null, error);
//     })
// };
