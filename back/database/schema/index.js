const { Sequelize, DataTypes, Model }  = require('sequelize');
const connect = require('../../core/connectDatabase');

const sequelize = connect.sequelize;

module.exports = {

    Users: connect.sequelize.define('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: true,
        sequelize,
        modelName: 'Users',
    }),

    AuthToken: connect.sequelize.define('AuthToken', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        UserId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),

    //
    // Room: connect.sequelize.define('Room', {
    //     id: {
    //         allowNull: false,
    //         autoIncrement: true,
    //         primaryKey: true,
    //         type: Sequelize.DataTypes.INTEGER
    //     },
    //     UserId: {
    //         type: Sequelize.DataTypes.INTEGER,
    //         allowNull: false,
    //     },
    //     name: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //     },
    // }, {
    //     timestamps: true,
    //     sequelize,
    //     modelName: 'Room',
    // }),
    //
    // UserRoom: connect.sequelize.define('UserRoom', {
    //     id: {
    //         allowNull: false,
    //         autoIncrement: true,
    //         primaryKey: true,
    //         type: Sequelize.DataTypes.INTEGER
    //     },
    //     UserId: {
    //         type: Sequelize.DataTypes.INTEGER,
    //         allowNull: false,
    //     },
    //     RoomId: {
    //         type: Sequelize.DataTypes.INTEGER,
    //         allowNull: false,
    //     },
    //     status: {
    //         type: Sequelize.DataTypes.BOOLEAN,
    //         allowNull: false,
    //     },
    // }, {
    //     timestamps: true,
    //     sequelize,
    //     modelName: 'UserRoom',
    // }),



};

