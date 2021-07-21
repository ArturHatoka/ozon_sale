const { Sequelize, DataTypes}  = require('sequelize');
const config = require('./../config/database');
const db = {};


const sequelize = new Sequelize( config.postgres.database, config.postgres.username, config.postgres.password, {

    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        dialectOptions: {
            collate: 'utf8m_general_ci'
        }
    },
    host: config.postgres.host,
    dialect: config.postgres.dialect
});
try {
    sequelize.authenticate();
    console.log('SUCCESS');
} catch (error) {
    console.error('ERROR_', error);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
