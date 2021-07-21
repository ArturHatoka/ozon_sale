const { Users, AuthToken, Room, UserRoom } = require('./index')

module.exports = {

    belongsToAuthTokenUser: AuthToken.belongsTo(Users),

    // belongToManyRoomUser: Room.belongsToMany(Users, {
    //     through: UserRoom,
    //     as: 'room_user'
    // }),
    // belongToManyUserRoom: Users.belongsToMany(Room, {
    //     through: UserRoom,
    //     as: 'user_room'
    // }),

}
