//Import CSS
import "./ThankYou.css";

//Other imports
import { useHistory } from "react-router-dom";
//Material-UI
import Button from "@material-ui/core/Button";

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
        <Button
        variant="contained"
        color="primary"
          onClick={() => {
            history.push("/");
          }}
        >
          Leave New Feedback
        </Button>
      </div>
    </>
  );
} // end ThankYou

//EXPORT this function (found in FeedbackForm.jsx)
export default ThankYou;
