//Import CSS
import "./Understanding.css";

//Other Imports
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Material-UI
import Button from "@material-ui/core/Button";
import {TextField} from '@material-ui/core';

//FUNCTION Understanding
function Understanding() {
  const [understanding, setUnderstanding] = useState("");

  //dispatch
  const dispatch = useDispatch();

  //Grab history so we can navigate to /understanding on NEXT button click
  const history = useHistory();

  //FUNCTION handleUnderstanding
  const handleUnderstanding = () => {
    //input validation
    if (understanding == "") {
      alert("You must enter a number 1-5 before continuing");
    } else if (understanding < 0 || understanding > 5) {
      alert("Please enter a number 0-5");
    } else {
      //dispatch to update variable in Redux
      dispatch({
        type: "UNDERSTANDING",
        payload: understanding,
      });

      //Go to next page
      history.push("/support");
    }
  }; // end handleUnderstanding

  return (
    <>
      <div>
        <h1>How well are you understanding the content?</h1>
        <p>Please enter a number 0-5 with 0 being the worst and 5 being the best</p>
      </div>
      <div>
        <TextField
        required
          label="Understanding?"
          type="number"
          min="0"
          max="5"
          placeholder="How well are you understanding?"
          id="understanding"
          value={understanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleUnderstanding}>NEXT</Button>
        <Button variant="outlined" color="primary" onClick={() => {history.goBack();}}>GO BACK</Button>
      </div>
    </>
  );
} // end Understanding

// EXPORT this function (found in FeedbackForm.jsx)
export default Understanding;
