// import provided at the start of this project
import React from "react";
import axios from "axios";
import "./App.css";

// import Components
import Welcome from '../Welcome/Welcome';

//import Router from react-router-dom
import {
  Route,
  HashRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
       <Route path="/" exact>
         <Welcome />
       </Route>






      </Router>
    </div>
  );
}

export default App;
