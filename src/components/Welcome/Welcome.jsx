//Import CSS
import "./Welcome.css";

// FUNCTION Welcome
function Welcome() {
  return (
    <>
      <div>
        <h1>Feedback Survey</h1>
        <p>Hello there!</p>
        <p>
          Thank you so much for visiting us! Please dedicate a few minutes to
          filling out our survey. It'll help us improve our services and help
          enhance your experience with us!
        </p>
      </div>
      <div>
          <button>START SURVEY NOW</button>
      </div>
    </>
  );
} // end Welcome

//EXPORT this function
export default Welcome;
