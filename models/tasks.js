'use strict';
const { isBefore } = require('date-fns');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init({
    body: {
      allowNull: false,
      type: Sequelize.STRING(256)
    },
    isDone: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
    deadline: {
      allowNull: false,
      type: Sequelize.DATEONLY
    },
  }, {
    sequelize,
    modelName: 'Tasks',
    underscored: true,
    tableName: 'tasks',
    isValidDate:v=>{
      if (isBefore(new Data(v),new Data())){
        throw new Error('Bat date');
      }
    }
  });
  return Tasks;
};