//Import CSS
import "./Understanding.css";

//Other Imports
import { useHistory } from "react-router-dom";

//FUNCTION Understanding
function Understanding({ understanding, setUnderstanding }) {
  //Grab history so we can navigate to /understanding on NEXT button click
  const history = useHistory();

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
          onClick={() => {
            history.push("/support");
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
} // end Understanding

// EXPORT this function (found in FeedbackForm.jsx)
export default Understanding;
