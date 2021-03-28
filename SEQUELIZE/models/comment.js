'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
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
  comment.init({

    content: {type:DataTypes.STRING,
      allowNull:false,
    },
    date:{type: DataTypes.DATE,
      allowNull:false,
    },
    Userid:{type:DataTypes.INTEGER,
      allowNull:false,
    },
    postid:{type:DataTypes.INTEGER,
      allowNull:false,
    },
    commentid: {type:DataTypes.INTEGER,
      allowNull:false,
    },
  }, {
    sequelize,
    tableName:'comments' ,
    modelName: 'comment',

  });
  return comment;
};