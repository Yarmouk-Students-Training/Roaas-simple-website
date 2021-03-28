'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User , {foreignKey:'userid'});

      this.hasMany(models.comment,{foreignKey:'postid'})
      this.hasMany(models.reaction,{foreignKey:'postid'})
    }
    
  };
  Post.init({
    postid:{type: DataTypes.INTEGER,
      allowNull: false},
    Userid:{type: DataTypes.INTEGER,
      allowNull: false},
    content:{type: DataTypes.STRING,
      allowNull: false},
  }, {
    sequelize,
    tableName:'post',
    modelName: 'Post',
  });
  return Post ;
};