const fs = require('fs');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql } = require('graphql');
const db = require('./models');
// const Sequelize = require('sequelize');
const populations = require('./public/chartData/populationNumbers');
const app = express();
const PORT = process.env.PORT || 4000;
const SurveyData = db.surveydata;
const Projections = db.Projections;
const pool = db.sequelize.connectionManager.pool;
const mySchema = require('./schema');


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    next();
};

/*  MIDDLEWARE  */

// for dev: logs all requests
app.use(function(req, res, next) {
  console.log('method: ',req.method, ' url: ',req.url);
  next();
 });

app.use(allowCrossDomain);

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
        let statePop = getStatePop(req.params.state);
        convertedChart.push(elem.areaname, ((elem.base/statePop) * 1000), ((elem.proj/statePop) * 1000), ((elem.change/statePop) * 10000), (elem.percentchange), ((elem.avgannualopenings/statePop) * 10000))
      }
    })
    res.send(convertedChart)
  })
})


app.use(express.static('public'));

function getStatePop(stateName) {
  for (var i = 0; i < populations.length; i++) {
    if (stateName === populations[i][0]) {
      return populations[i][1]
    }
  }
}

app.listen(PORT, () => {
  db.sequelize.sync(); // Sync all models that aren't already in the database
  console.log(`Server running on http://localhost:${PORT}`);
});