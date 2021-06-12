const express = require('express');
const feedbackRouter = express.Router();
const pool = require('../modules/pool');

feedbackRouter.get('/', (req, res) => {
    console.log('getting all feedback');
    let queryText = 'SELECT feeling, understanding, support, comments FROM "feedback" ORDER BY "date";';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
})
.catch( err => {
    console.log('Error getting feedback', err);
    res.sendStatus(500);
});
})

module.exports = feedbackRouter;