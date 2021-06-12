// import provided at the start of this project
import React from "react";
import axios from "axios";
import "./App.css";

// import Components
import FeedbackForm from "../FeedbackForm/FeedbackForm";

//FUNCTION App
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <FeedbackForm />
    </div>
  );
}

//EXPORT this function (found in index.js)
export default App;
