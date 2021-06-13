//Import CSS
import "./Support.css";

//Other Imports
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Material-UI
import Button from "@material-ui/core/Button";
import {TextField} from '@material-ui/core';

//FUNCTION Support
function Support() {
  const [support, setSupport] = useState("");

  //dispatch
  const dispatch = useDispatch();

  //Grab history so we can navigate to /understanding on NEXT button click
  const history = useHistory();

  //FUNCTION handleSupport
  const handleSupport = () => {
    //input validation
    if (support == "") {
      alert("You must enter a number 1-5 before continuing");
    } else if (support < 0 || support > 5) {
      alert("Please enter a number 0-5");
    } else {
      //dispatch to update variable in Redux
      dispatch({
        type: "SUPPORT",
        payload: support,
      });

      //Go to next page
      history.push("/comments");
    }
  }; // end handleSupport

  return (
    <>
      <div>
        <h1>How well are you being supported?</h1>
        <p>Please enter a number 0-5 with 0 being the worst and 5 being the best</p>
      </div>
      <div>
        <TextField
        required
          label="Support?"
          type="number"
          min="0"
          max="5"
          placeholder="Do you feel supported?"
          id="support"
          value={support}
          onChange={(event) => setSupport(event.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSupport}>NEXT</Button>
        <Button variant="outlined" color="primary" onClick={() => {history.goBack();}}>GO BACK</Button>
      </div>
    </>
  );
} // end Support

//EXPORT this function (found in FeedbackForm.jsx)
export default Support;
