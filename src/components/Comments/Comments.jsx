//Import CSS
import "./Comments.css";

//Other Imports
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useState } from "react";
//Material-UI
import Button from "@material-ui/core/Button";
import {TextField} from '@material-ui/core';

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
        <h1>Any comments you want to leave?</h1>
        <p>Please leave us any additional feedback</p>
      </div>
      <div>
        <TextField
          label="Comments"
          type="text"
          placeholder="Comments"
          id="comments"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleComments}
        >
          NEXT
        </Button>
        <Button variant="outlined" color="primary" onClick={() => {history.goBack();}}>GO BACK</Button>
      </div>
    </>
  );
} // end Comments

//EXPORT this function (found in FeedbackForm.jsx)
export default Comments;
