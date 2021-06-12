//Import CSS
import "./Admin.css";

//Other Imports
import {useSelector, useDispatch} from 'react-redux';

//FUNCTION Admin
function Admin () {
    //Grab the feedbackList from feedbackReducer
    const feedbackList = useSelector( store => store.feedbackReducer);

    //Use dispatch in the GET request
    const dispatch = useDispatch();

    return (
        <>
            <h1>Feedback Results</h1>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackList.map( (item, i) => {
                        return(
                            <>
                                <tr key={i}>
                                    <td>{item.feeling}</td>
                                    <td>{item.understanding}</td>
                                    <td>{item.support}</td>
                                    <td>{item.comments}</td>
                                    <td><button>DELETE</button></td>
                                </tr>
                            </>
                        ) 
                    })}
                </tbody>
            </table>


        </>
    )
}

//EXPORT this function
export default Admin;