// import provided at the start of this project
import React from "react";
import axios from "axios";
import "./App.css";

// import Components
import FeedbackForm from "../FeedbackForm/FeedbackForm";

//Material-UI imports
import '@fontsource/roboto';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//Material-UI Theme
const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#009688'
      },
      secondary : {
          main: '#78909c'
      }
  }
});

//FUNCTION App
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <FeedbackForm />
    </div>
    </ThemeProvider>
  );
}

//EXPORT this function (found in index.js)
export default App;
