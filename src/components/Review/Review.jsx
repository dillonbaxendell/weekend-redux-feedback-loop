//Import CSS
import "./Review.css";

//FUNCTION Review
function Review(props) {
  return (
    <>
      <div>
        <h1>Review Your Feedback</h1>
      </div>
      <div>
        <h3>Feelings: {props.feeling}</h3>
        <h3>Understanding: {props.understanding}</h3>
        <h3>Support: {props.support}</h3>
        <h3>Comments: {props.comments}</h3>
      </div>
      <div>
        <input type="submit" placeholder="SUBMIT" />
      </div>
    </>
  );
} // end Review

//EXPORT this function (found in FeedbackForm.jsx)
export default Review;
