//Import CSS
import "./Review.css";

//Other Imports
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
//Material-UI
import Button from "@material-ui/core/Button";

//FUNCTION Review
function Review () {
  //Grab history so we can navigate to /feeling on button click
  const history = useHistory();

  //dispatch
  const dispatch = useDispatch();

  //Grab data from Redux
  const newFeedback = useSelector( store => store.feedbackReducer);

  //FUNCTION handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    //Axios POST
    axios.post("/feedback", newFeedback).then((response) => {
      //Set state variables to empty
      dispatch({
        type: 'CLEAR_FEEDBACK',
      })
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
        <Button variant="contained" color="primary" type="submit" placeholder="SUBMIT" onClick={handleSubmit}>
          SUBMIT
        </Button>
        <Button variant="outlined" color="primary" onClick={() => {history.goBack();}}>GO BACK</Button>
      </div>
    </>
  );
} // end Review

//EXPORT this function (found in FeedbackForm.jsx)
export default Review;
