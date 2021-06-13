//Import CSS
import "./FeedbackForm.css";

//Other imports
import { useState } from "react";

//Import components
import Welcome from "../Welcome/Welcome";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import ThankYou from "../ThankYou/ThankYou";
import Admin from "../Admin/Admin";

//import Router from react-router-dom
import { Route, HashRouter as Router, useHistory } from "react-router-dom";


//FUNCTION FeedbackForm
function FeedbackForm() {
  const [feeling, setFeeling] = useState("");
  const [understanding, setUnderstanding] = useState("");
  const [support, setSupport] = useState("");
  const [comments, setComments] = useState("");

  const clearInputs = () => {
    setFeeling("");
    setUnderstanding("");
    setSupport("");
    setComments("");
  };

  const newFeedback = {
    feeling: feeling,
    understanding: understanding,
    support: support,
    comments: comments,
  };

  return (
    <>
      <form>
        <Router>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/feeling">
            <Feeling feeling={feeling} setFeeling={setFeeling} />
          </Route>
          <Route path="/understanding">
            <Understanding
              understanding={understanding}
              setUnderstanding={setUnderstanding}
            />
          </Route>
          <Route path="/support">
            <Support support={support} setSupport={setSupport} />
          </Route>
          <Route path="/comments">
            <Comments comments={comments} setComments={setComments} />
          </Route>
          <Route path="/review">
            <Review newFeedback={newFeedback} clearInputs={clearInputs} />
          </Route>
          <Route path="/thanks">
            <ThankYou />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Router>
      </form>
    </>
  );
} // end FeedbackForm

//EXPORT this function (found in App.jsx)
export default FeedbackForm;
