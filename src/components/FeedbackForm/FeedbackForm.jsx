//Import CSS
import "./FeedbackForm.css";

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

  return (
    <>
      <form>
        <Router>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/feeling">
            <Feeling />
          </Route>
          <Route path="/understanding">
            <Understanding />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/review">
            <Review />
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
