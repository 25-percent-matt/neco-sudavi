module.exports = function(sequelize, DataTypes) {
  var surveymetadata = sequelize.define("surveymetadata", {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    fieldName : {
      type : DataTypes.STRING(127),
      allowNull : false
    },
    fieldLabel : {
      type : DataTypes.STRING(127),
      allowNull : true
    },
    numOfResponses : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    responsePercent : {
      type : DataTypes.DECIMAL,
      allowNull : false
    },
    fieldGrouping : {
      type : DataTypes.STRING(127),
      allowNull : true
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  return surveymetadata;
};