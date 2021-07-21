require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/index')
const errorMiddleware = require('./middleware/errorMiddleware')

const app = express();
const PORT = process.env.PORT || 7000;


// const server = require('http').createServer(app, {
//     cors: {
//         origin: true,
//     }
// });
// const io = require('socket.io')(server);
// const consola = require('consola')


// OPTIONS
// app.options('*', cors());
app.use(cors({
    origin: true, credentials: true
}));

app.use(express.json());

app.use(cookieParser());


// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use('/api', router);


app.use(errorMiddleware);


//
const start = async () =>
{
    try{
        //connect database
        app.listen(PORT, () => { console.log('Server listening on http://localhost:'+PORT) })
    } catch (e) {
        console.log(e)
    }
}
start();

// io.on('connection', socket =>
// {
//
//     // socket.on("createUser", (user, cb) =>
//     // {
//     //     userModel.addUser({
//     //         ...user,
//     //         id: socket.id
//     //     })
//     //     cb({ id: socket.id })
//     // });
//   // socket.on('leftChat', cb =>
// //     // {
// //     //     const id = socket.id;
// //     //     const user = userModel.getUser(id);
// //     //     if (user)
// //     //     {
// //     //         userModel.removeUser(id);
// //     //         socket.leave(user.room);
// //     //         io.to(user.room).emit('updateUsers', userModel.getUsersByRoom(user.room));
// //     //         io.to(user.room).emit('newMessage', new messageModel('admin', `User ${user.name} left chat`))
// //     //     }
// //     //     cb();
// //     // });
//     // socket.on('leftChat', cb =>
//     // {
//     //     const id = socket.id;
//     //     const user = userModel.getUser(id);
//     //     if (user)
//     //     {
//     //         userModel.removeUser(id);
//     //         socket.leave(user.room);
//     //         io.to(user.room).emit('updateUsers', userModel.getUsersByRoom(user.room));
//     //         io.to(user.room).emit('newMessage', new messageModel('admin', `User ${user.name} left chat`))
//     //     }
//     //     cb();
//     // });
//
//
//
//     const { Room } = require('./database/schema/index')
//     const { belongToManyRoomUser, belongToManyUserRoom } = require('./database/schema/connections');
//
//     socket.on("joinRoom", async (data) =>
//     {
//         socket.join(data.roomId);
//         io.to(data.roomId).emit('updateArrayUsersRoom', await Room.findByPk(data.roomId, {
//                 include: 'room_user'
//             }),
//         )
//
//         // io.to(data.roomId).emit('updateArrayUsersRoom', await Room.findByPk(data.roomId, {
//         //     include: 'room_user'
//         // }),;
//         // io.to(data.roomId).emit('updateArrayUsersRoom', userModel.getUsersByRoom(user.room));
//
//         // socket.emit('newMessage', new messageModel('admin', `Hello, ${user.name}`));
//         // socket.broadcast
//         //     .to(user.room)
//         //     .emit('newMessage', new messageModel('admin', `User ${user.name} connected to chat`));
//     });
//
//     // const { AuthToken, UserRoom, GameRoom } = require('./database/schema/index')
//     // socket.on('createMessage', async (data, cb) =>
//     // {
//     //     io.to(data.roomId).emit('newMessage', await GameRoom.findAll({
//     //         where: {
//     //             RoomId: data.roomId
//     //         }
//     //     }));
//     //     cb(true);
//     // });
//
//     // socket.on('resGame', async (number) =>
//     // {
//     //     io.to(data.roomId).emit('newMessage', await UserRoom.findAll({
//     //         where: {
//     //             RoomId: data.roomId,
//     //             status: true,
//     //         }
//     //     }));
//     //     cb(true);
//     // });
//
//     // socket.on('disconnect', () =>
//     // {
//     //     const id = socket.id;
//     //     const user = userModel.getUser(id);
//     //     if (user) {
//     //         userModel.removeUser(id);
//     //         socket.leave(user.room);
//     //         io.to(user.room).emit('updateUsers', userModel.getUsersByRoom(user.room));
//     //         io.to(user.room).emit('newMessage', new messageModel('admin', `User ${user.name} left chat`))
//     //     }
//     // });
//
// })



// server.listen(PORT, () => {
//     consola.ready({
//         message: 'Server listening on http://localhost:'+PORT,
//         badge: true
//     });
// });
