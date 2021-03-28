'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User , {foreignKey:'userid'});
      this.belongsTo(models.Post , {foreignKey:'postid'});
    }
    
  };
  reaction.init({
    type:{type: DataTypes.STRING,
      allowNull:false},
    postid:{type: DataTypes.INTEGER,
      allowNull:false},

      reactionid:{type: DataTypes.STRING,
        allowNull:false},
      

    Userid:{type: DataTypes.INTEGER,
      allowNull:false},
  }, {
    sequelize,
    tableName:'reactions',
    modelName: 'reaction',
  });
  return reaction;
};