const { Sequelize } = require("sequelize");

module.exports = (sequelize, type) =>{
    return sequelize.define('reto3', {
        // Atributos del modelo de usuarios
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: type.STRING,
        email: type.STRING,
        password: type.STRING
    });
}