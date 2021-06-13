//Import CSS
import "./ThankYou.css";

//Other imports
import { useHistory } from "react-router-dom";

//FUNCTION ThankYou
function ThankYou() {
  //Grab history so we can navigate to /feeling on button click
  const history = useHistory();

  return (
    <>
      <div>
        <h1>Thank You!</h1>
      </div>
      <div>
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          Leave New Feedback
        </button>
      </div>
    </>
  );
} // end ThankYou

//EXPORT this function (found in FeedbackForm.jsx)
export default ThankYou;
