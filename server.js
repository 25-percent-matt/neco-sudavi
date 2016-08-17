const fs = require('fs');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql } = require('graphql');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 4000;
const SurveyData = db.surveydata;
const pool = db.sequelize.connectionManager.pool;
const mySchema = require('./schema');

/*  MIDDLEWARE  */

// for dev: logs all requests
app.use('/graphql', (req, res) => {
  return graphqlHTTP({
    schema: mySchema,
    graphiql: true,
    context: { pool }, // available to all graphql resolve as the third argument
  })(req, res);
});

app.use(function(req, res, next) {
  console.log('method: ',req.method, ' url: ',req.url);
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
  db.sequelize.sync();
  console.log(`Server running on http://localhost:${PORT}`);
});