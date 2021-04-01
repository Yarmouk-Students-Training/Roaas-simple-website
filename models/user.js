'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Post,{foreignKey:'userid'});
      this.hasMany(models.comment,{foreignKey:'userid'});
      this.hasMany(models.reaction,{foreignKey:'userid'});
      
      this.belongsToMany(this , {through:models.Friends , as: 'accept' , foreignKey:'reject'});
    }
  };
   
  User.init(
    {
      Userid:{
    primaryKey:true,
    type: DataTypes.INTEGER,
    allowNull: false,
        
    },
    name:{
    type: DataTypes.STRING,
    allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
     // allowNull: false,
    },
    role:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{ 
      type:DataTypes.STRING,
      allowNull:false,
    },
  }, 
  {
    sequelize,
    tableName:'users' ,
    modelName: 'User',
  });
  return User;
};