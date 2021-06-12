//Import CSS
import "./Understanding.css";

//FUNCTION Understanding
function Understanding({understanding, setUnderstanding}) {
  return (
    <>
      <div>
        <h1>How well are you understanding the content?</h1>
      </div>
      <div>
        <input
          type="number"
          min="0"
          max="5"
          placeholder="Understanding?"
          id="understanding"
          value={understanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />
        <button
          onClick={() => {
            history.push("/support");
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
}

export default Understanding;
