const connect  = require('../../core/connectDatabase');
const {  Users, UserRoom, Room, AuthToken }= require('../schema/index');


console.log('START MIGRATIONS');

const {
    belongsToAuthTokenUser,
    // belongToManyUserRoom,
    // belongToManyRoomUser,

} = require('../schema/connections')

connect.sequelize.sync({force:true}).then(()=>
{
    console.log("Tables have been created\n");
    console.log('END MIGRATIONS\n');
})
.catch(err=>{
    console.log(err)
});
