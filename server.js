const fs = require('fs');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql } = require('graphql');
const db = require('./models');
const Sequelize = require('sequelize');
const app = express();
const PORT = process.env.PORT || 4000;
const SurveyData = db.surveydata;
const Projections = db.projections;
const pool = db.sequelize.connectionManager.pool;
const mySchema = require('./schema');
const queries = require('./queries');

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
  var query = `{ ${querySelector} { Response }, ${querySelector} { Count } }`;
  graphql(mySchema, query)
    .then((result) => {
      let resultArr = queries.objsToArrays(result.data[querySelector]);
      res.send(resultArr);
    });
  });

app.use('/blsProjections/:state', (req, res) => {
  let stateToFind = req.params.state;
  Projections.findAll({ where: { areaname: stateToFind }}).then(function(data) {
    let convertToc3 = data[0].dataValues;
    let convertedChart = [];
    let statePop = convertToc3.population;
    convertedChart.push(convertToc3.areaname, ((convertToc3.base/statePop) * 1000), ((convertToc3.proj/statePop) * 1000), ((convertToc3.change/statePop) * 10000), (convertToc3.percentchange), ((convertToc3.avgannualopenings/statePop) * 10000));
    res.send(convertedChart);
  });
});

app.use(express.static('public'));

app.listen(PORT, () => {
  db.sequelize.sync(); // Sync all models that aren't already in the database
  console.log(`Server running on http://localhost:${PORT}`);
});
