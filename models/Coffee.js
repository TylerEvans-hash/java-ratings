const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Coffee extends Model {}

Coffee.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
    },
    // type: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: false
    // },
    // roast: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: false
    // }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'coffee'
  }
);

module.exports = Coffee;