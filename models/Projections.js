module.exports = function(sequelize, DataTypes) {
  var Projections = sequelize.define('projections', {
  stfips: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  areaname: {
    type: DataTypes.STRING
  },
  occupationcode: {
    type: DataTypes.STRING
  },
  occupationname: {
    type: DataTypes.STRING
  },
  baseyear: {
    type: DataTypes.STRING
  },
  base: {
    type: DataTypes.STRING
  },
  projyear: {
    type: DataTypes.STRING
  },
  proj: {
    type: DataTypes.STRING
  },
  change: {
    type: DataTypes.STRING
  },
  percentchange: {
    type: DataTypes.STRING
  },
  avgannualopenings: {
    type: DataTypes.STRING
  }
},
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  return Projections;
};