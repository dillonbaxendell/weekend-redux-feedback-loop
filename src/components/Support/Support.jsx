//Import CSS
import './Support.css';

//FUNCTION Support
function Support () {
    return (
        <>
             <div>
        <h1>How well are you being supported?</h1>
      </div>
      <div>
        <input
          type="number"
          min="0"
          max="5"
          placeholder="Support?"
          id="support"
          value={support}
          onChange={(event) => setSupport(event.target.value)}
        />
        <button
          onClick={() => {
            history.push("/comments");
          }}
        >
          NEXT
        </button>
      </div>

        </>
    )
} // end Support

//EXPORT this function
export default Support;