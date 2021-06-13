//Import CSS
import "./Understanding.css";

//Other Imports
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useState } from "react";

//FUNCTION Understanding
function Understanding () {
    const [understanding, setUnderstanding] = useState('');
  
    //dispatch
    const dispatch = useDispatch();
  
    //Grab history so we can navigate to /understanding on NEXT button click
    const history = useHistory();

    //FUNCTION handleUnderstanding
    const handleUnderstanding = () => {
      dispatch({
        type: 'UNDERSTANDING',
        payload: understanding
      })
  
      //Go to next page
      history.push('/support');
  
    } // end handleUnderstanding

  return (
    <>
      <div>
        <h1>How well are you understanding the content?</h1>
      </div>
      <div>
        <input
          type="number"
          min="0"
          max="5"
          placeholder="Understanding?"
          id="understanding"
          value={understanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />
        <button
          onClick={handleUnderstanding}
        >
          NEXT
        </button>
      </div>
    </>
  );
} // end Understanding

// EXPORT this function (found in FeedbackForm.jsx)
export default Understanding;
