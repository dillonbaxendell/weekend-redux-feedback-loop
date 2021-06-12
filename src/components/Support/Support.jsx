//Import CSS
import "./Support.css";

//Other Imports
import { useHistory } from "react-router-dom";

//FUNCTION Support
function Support({ support, setSupport }) {
  //Grab history so we can navigate to /understanding on NEXT button click
  const history = useHistory();

  return (
    <>
      <div>
        <h1>How well are you being supported?</h1>
      </div>
      <div>
        <input
          type="number"
          min="0"
          max="5"
          placeholder="Support?"
          id="support"
          value={support}
          onChange={(event) => setSupport(event.target.value)}
        />
        <button
          onClick={() => {
            history.push("/comments");
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
} // end Support

//EXPORT this function (found in FeedbackForm.jsx)
export default Support;
