//Import CSS
import "./Comments.css";

//Other Imports
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useState } from "react";

//FUNCTION Comments
function Comments () {
  const [comments, setComments] = useState('');
  
  //dispatch
  const dispatch = useDispatch();

  //Grab history so we can navigate to /understanding on NEXT button click
  const history = useHistory();

  //FUNCTION handleComments
  const handleComments = () => {
    dispatch({
      type: 'COMMENTS',
      payload: comments
    })

    //Go to next page
    history.push('/review');

  } // end handleComments

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
          onClick={handleComments}
        >
          NEXT
        </button>
      </div>
    </>
  );
} // end Comments

//EXPORT this function (found in FeedbackForm.jsx)
export default Comments;
