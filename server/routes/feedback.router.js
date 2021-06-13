const express = require("express");
const feedbackRouter = express.Router();
const pool = require("../modules/pool");

feedbackRouter.get("/", (req, res) => {
  console.log("getting all feedback");
  let queryText =
    'SELECT feeling, understanding, support, comments FROM "feedback" ORDER BY "date";';
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

module.exports = feedbackRouter;
