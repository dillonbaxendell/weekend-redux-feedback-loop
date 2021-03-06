//Import CSS
import "./Feeling.css";

//Other Imports
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Material-UI
import Button from "@material-ui/core/Button";
import {TextField} from '@material-ui/core';

//FUNCTION Feeling
function Feeling() {
  const [feeling, setFeeling] = useState("");

  //dispatch
  const dispatch = useDispatch();

  //Grab history so we can navigate to /understanding on NEXT button click
  const history = useHistory();

  const handleFeeling = () => {
    //input validation
    if (feeling == "") {
      alert("You must enter a number 1-5 before continuing");
    } else if (feeling < 0 || feeling > 5) {
      alert("Please enter a number 0-5");
    } else {
      //dispatch to update variable in Redux
      dispatch({
        type: "FEELING",
        payload: feeling,
      });

      //Go to next page
      history.push("/understanding");
    }
  }; // end handleFeeling

  return (
    <>
      <div>
        <h1>How are you feeling today?</h1>
        <p>Please enter a number 0-5 with 0 being the worst and 5 being the best</p>
      </div>
      <div>
        <TextField
        required
          label="Feeling?"
          type="number"
          min="0"
          max="5"
          placeholder="How are you feeling?"
          id="feeling"
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleFeeling}>NEXT</Button>
        <Button variant="outlined" color="primary" onClick={() => {history.push('/');}}>GO BACK</Button>
      </div>
    </>
  );
} // end Feeling

//EXPORT this function (found in FeedbackForm.jsx)
export default Feeling;
