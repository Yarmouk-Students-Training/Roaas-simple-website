'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  friends.init({
    friendsid:{type: DataTypes.INTEGER,
      allowNull:false,},
    Userid:{type: DataTypes.INTEGER,
      allowNull:false,},
    accept:{type: DataTypes.BOOLEAN,
      allowNull:false,},
      reject: {
        type:DataTypes.STRING,
        allowNull :false, 
      },
  }, {
    sequelize,
    tableName:'friends',
    modelName: 'Friends',
  });
  return friends;
};