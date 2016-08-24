const fs = require('fs');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql } = require('graphql');
const db = require('./models');
const Sequelize = require('sequelize');

const app = express();
const PORT = process.env.PORT || 4000;
const SurveyData = db.surveydata;
const pool = db.sequelize.connectionManager.pool;
const mySchema = require('./schema');

var sequelize = new Sequelize('postgres://htmlint:t@localhost:5432/programmerdata');

var Projections = sequelize.define('projections', {
  stfips: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  areaname: {
    type: Sequelize.STRING
  },
  occupationcode: {
    type: Sequelize.STRING
  },
  occupationname: {
    type: Sequelize.STRING
  },
  baseyear: {
    type: Sequelize.STRING
  },
  base: {
    type: Sequelize.STRING
  },
  projyear: {
    type: Sequelize.STRING
  },
  proj: {
    type: Sequelize.STRING
  },
  change: {
    type: Sequelize.STRING
  },
  percentchange: {
    type: Sequelize.STRING
  },
  avgannualopenings: {
    type: Sequelize.STRING
  }
},
  {
    timestamps: false
  }
);

/*  MIDDLEWARE  */

// for dev: logs all requests
app.use('/graphql', (req, res) => {
  return graphqlHTTP({
    schema: mySchema,
    graphiql: true,
    context: { pool }, // available to all graphql resolve as the third argument
  })(req, res);
});

app.use('/chartQuery/:id', (req, res) => {
  var querySelector = req.params.id;
  var query = `{ surveyRecords { ${querySelector} } }`;
  graphql(mySchema, query).then(result => {
    let allb = result
    let tallies = []
    allb.data.surveyRecords.forEach(function (elem) {
        let x = findIndex(elem, tallies, querySelector)
        if (typeof x === 'number') {
          tallies[x][1] = tallies[x][1] + 1
        } else {
          tallies.push([elem[querySelector], 1])
        }
      })
    res.send(tallies)
  });
});

function findIndex (elem, tallies, querySelector) {
  for (var i = 0; i < tallies.length; i++) {
    if (elem[querySelector] === tallies[i][0]) {
      return i
    }
  }
  return 'the fail frog';
}

app.use('/blsProjections/:state', (req, res) => {
  Projections.findAll().then(function(Projections) {
    let convertToc3 = Projections
    let convertedChart = [];
    convertToc3.forEach((elem) => {
      if (elem.areaname === req.params.state) {
        convertedChart.push(elem.areaname, (elem.base/100), (elem.proj/100), (elem.change/100), elem.percentchange, elem.avgannualopenings)
      }
    })
    res.send(convertedChart)
  })
})

app.use(function(req, res, next) {
  next();
 });

app.use(express.static('public'));

app.get('/api/stuff', (req, res) => {
  surveydata.findOne({
    where: { NetworkID : '4074a06017' }
  })
    .then(function(data, err){
      // in terminal window
      console.log('data: ', data.dataValues);
      if(err) console.log('error: ', err);
      res.json(data.dataValues);
    });
});

app.listen(PORT, () => {
  db.sequelize.sync(); // Sync all models that aren't already in the database
  console.log(`Server running on http://localhost:${PORT}`);
});