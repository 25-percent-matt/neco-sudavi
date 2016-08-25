module.exports = function(sequelize, DataTypes) {
  var Projections = sequelize.define('projections', {
  stfips: {
    type: DataTypes.INTEGER,
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
    type: DataTypes.INTEGER
  },
  base: {
    type: DataTypes.INTEGER
  },
  projyear: {
    type: DataTypes.INTEGER
  },
  proj: {
    type: DataTypes.INTEGER
  },
  change: {
    type: DataTypes.INTEGER
  },
  percentchange: {
    type: DataTypes.DECIMAL
  },
  avgannualopenings: {
    type: DataTypes.INTEGER
  },
  population: {
    type: DataTypes.INTEGER
  }
},
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  return Projections;
};