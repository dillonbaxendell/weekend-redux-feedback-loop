//Import CSS
import "./Welcome.css";

//Other Imports
import { useHistory } from "react-router-dom";
//Material-UI
import Button from "@material-ui/core/Button";

// FUNCTION Welcome
function Welcome() {
  //Grab history so we can navigate to /feeling on button click
  const history = useHistory();

  return (
    <>
      <div>
        <h1>Feedback Survey</h1>
        <p>Hello there!</p>
        <p>
          Thank you so much for visiting us! Please dedicate a few minutes to
          filling out our survey. It'll help us improve our services and help
          enhance your experience with us!
        </p>
      </div>
      <div>
        <Button
        variant="contained"
        color="primary"
          onClick={() => {
            history.push("/feeling");
          }}
        >
          START SURVEY NOW
        </Button>
      </div>
    </>
  );
} // end Welcome

//EXPORT this function (found in FeedbackForm.jsx)
export default Welcome;
