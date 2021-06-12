//Import CSS
import "./Feeling.css";

//Other Imports
import { useHistory } from "react-router-dom";

//FUNCTION Feeling
function Feeling({ feeling, setFeeling }) {
  //Grab history so we can navigate to /understanding on NEXT button click
  const history = useHistory();

  return (
    <>
      <div>
        <h1>How are you feeling today?</h1>
      </div>
      <div>
        <input
          type="number"
          min="0"
          max="5"
          placeholder="Feeling?"
          id="feeling"
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
        />
        <button
          onClick={() => {
            history.push("/understanding");
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
} // end Feeling

//EXPORT this function (found in FeedbackForm.jsx)
export default Feeling;
