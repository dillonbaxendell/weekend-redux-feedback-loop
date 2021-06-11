//Import CSS
import "./Feeling.css";

//Other Imports
import { useHistory } from "react-router-dom";

//FUNCTION Feeling
function Feeling() {
  //Grab history so we can navigate to /understanding on NEXT button click
  const history = useHistory();

  return (
    <>
      <div>
        <h1>How are you feeling today?</h1>
      </div>
      <div>
          <input type="number" min="0" max="5" placeholder="Feeling?" id="feeling"/>
      </div>
    </>
  );
}

//EXPORT this function
export default Feeling;
