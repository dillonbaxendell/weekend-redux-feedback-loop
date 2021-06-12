//Import CSS
import "./FeedbackForm.css";

//Other imports
import { useState } from 'react';

//Import components
import Welcome from '../Welcome/Welcome';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Admin from '../Admin/Admin';
import Review from '../Review/Review';

//import Router from react-router-dom
import {
    Route,
    HashRouter as Router,
    useHistory,
  } from "react-router-dom";

function FeedbackForm () {
    const [feeling, setFeeling] = useState('');
    const [understanding, setUnderstanding] = useState('');
    const [support, setSupport] = useState('');
    const [comments, setComments] = useState('');


    //FUNCTION handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Adding feedback', );
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

        <Router>
       <Route path="/" exact>
         <Welcome />
       </Route>
       <Route path="/feeling">
         <Feeling feeling={feeling} setFeeling={setFeeling}/>
       </Route>
        <Route path="/understanding">
            <Understanding understanding={understanding} setUnderstanding={setUnderstanding}/>
        </Route>
        <Route path="/support">
            <Support support={support} setSupport={setSupport} />
        </Route>

      <Route path="/review">
        <Review />
      </Route>


        <Route path="/admin">
          <Admin />
        </Route>
      </Router>

      </form>
        </>
    )
}

export default FeedbackForm;