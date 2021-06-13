//Import CSS
import "./Admin.css";

//Other Imports
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import { useEffect } from 'react';

//FUNCTION Admin
function Admin () {
    //Grab the feedbackList from feedbackReducer
    const feedbackList = useSelector( store => store.feedbackList);

    //Use dispatch in the GET request
    const dispatch = useDispatch();

    //On page load, run these functions:
    useEffect(() => {
        getFeedback();
      }, [])

    //GET Feedback
    const getFeedback = () => {
        console.log('In getFeedback');

        //axios to get feedback from database
        //send to Index.js for redux
        axios.get( '/feedback' )
        .then( response => {
            //console log response
            console.log('Response from GET: ', response.data )
            
            //dispatch to redux
            dispatch({
                type: 'GET_FEEDBACK',
                payload: response.data
            });
        })
        .catch( err => {
            console.log('Error in GET: ', err);
        })
    } // end getFeedback

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
} // end Admin

//EXPORT this function (found in FeedbackForm.jsx)
export default Admin;