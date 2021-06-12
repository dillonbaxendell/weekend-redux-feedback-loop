//Import CSS
import "./Review.css";


//FUNCTION Review
function Review () {
    return (
        <> 
        <div>
            <h1>Review Your Feedback</h1>
            </div>
            <div>
            <h3>Feelings: score</h3>
            <h3>Understanding: score</h3>
            <h3>Support: score</h3>
            <h3>Comments: comments</h3>
            </div>
            <div>
                <input type="submit" placeholder="SUBMIT" />
            </div>

        </>
    )
} // end Review

//EXPORT this function
export default Review;