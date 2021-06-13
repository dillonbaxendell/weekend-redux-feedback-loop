const express = require("express");
const feedbackRouter = express.Router();
const pool = require("../modules/pool");

feedbackRouter.get("/", (req, res) => {
  console.log("getting all feedback");
  let queryText =
    'SELECT id, feeling, understanding, support, comments FROM "feedback" ORDER BY "date";';
  pool
    .query(queryText)
    .then((result) => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error getting feedback", err);
      res.sendStatus(500);
    });
});

feedbackRouter.post("/", (req, res) => {
  let newFeedback = req.body;
  console.log("Adding new feedback", newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

  let values = [
    newFeedback.feeling,
    newFeedback.understanding,
    newFeedback.support,
    newFeedback.comments,
  ];

  pool
    .query(queryText, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});

feedbackRouter.delete( '/:id', (req, res) => {
  //grab the id of the feedback to delete
  itemToDelete = req.params.id;
  console.log('Feedback to delete: ', itemToDelete);

  const queryText = `DELETE FROM "feedback" WHERE "feedback".id = $1;`

  pool.query( queryText, [itemToDelete] )
    .then( response => {
      console.log('Deleted feedback with ID#: ', itemToDelete);
    })
    .catch( err => {
      console.log('Error in delete request', err);
    })
})

module.exports = feedbackRouter;
