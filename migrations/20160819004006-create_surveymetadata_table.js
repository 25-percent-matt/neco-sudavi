'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, DataTypes) {
    return queryInterface.createTable('surveydata', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },
      fieldName : {
        type : Sequelize.STRING(127),
        allowNull : false
      },
      fieldLabel : {
        type : Sequelize.STRING(127),
        allowNull : true
      },
      numOfResponses : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      responsePercent : {
        type : Sequelize.DECIMAL,
        allowNull : false
      },
      fieldGrouping : {
        type : Sequelize.STRING(127),
        allowNull : true
      }
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('surveymetadata');
  }
};
