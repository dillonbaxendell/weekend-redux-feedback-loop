//Import CSS
import "./Review.css";

//Other Imports
import { useHistory } from "react-router-dom";
import axios from "axios";

//FUNCTION Review
function Review({ newFeedback, clearInputs }) {
  //Grab history so we can navigate to /feeling on button click
  const history = useHistory();

  //FUNCTION handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    //Axios POST
    axios.post("/feedback", newFeedback).then((response) => {
      //Set state variables to empty
      clearInputs();
      //go to next page
      history.push("/thanks");
    });
  }; // end handleSubmit

  return (
    <>
      <div>
        <h1>Review Your Feedback</h1>
      </div>
      <div>
        <h3>Feelings: {newFeedback.feeling}</h3>
        <h3>Understanding: {newFeedback.understanding}</h3>
        <h3>Support: {newFeedback.support}</h3>
        <h3>Comments: {newFeedback.comments}</h3>
      </div>
      <div>
        <button type="submit" placeholder="SUBMIT" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </>
  );
} // end Review

//EXPORT this function (found in FeedbackForm.jsx)
export default Review;
