//Import CSS
import "./Comments.css";

//Other Imports
import { useHistory } from "react-router-dom";

//FUNCTION Comments
function Comments({ comments, setComments }) {
  //Grab history so we can navigate to /understanding on NEXT button click
  const history = useHistory();
  return (
    <>
      <div>
        <h1>Any Comments you want to leave?</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Comments"
          id="comments"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
        />
        <button
          onClick={() => {
            history.push("/review");
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
} // end Comments

//EXPORT this function (found in FeedbackForm.jsx)
export default Comments;
