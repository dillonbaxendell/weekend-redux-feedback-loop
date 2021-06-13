## TO-DO LIST

### Setup
[X] npm install
[X] npm run server
[X] npm run client

//? What's missing?
[] Setup router in App.jsx
[] import router
    [] Route that links to Feeling page (/feeling)
    [] Route that links to Understanding page (/understanding)
    [] Route that links to Supported page (/support)
    [] Route that links to Comments page (/comments)
    [] Route that links to Review page (/review)
    [] Route that links to Thank You page (/thanks)
    [] Route that links to Welcome page, which is Home (/)

    [] Route (/admin) should be accessible but not linked to any button

### Add New Feedback

***Create a multi-part form that allows users to leave feedback for today.There will be 4 views for the form parts.***

Set up (9) components 
    [X] Welcome Page
    [X] FeedbackForm (parent)
    [X] 5 Views
    [] Thank You page
    [X] Admin

1. Welcome Page
[X] Welcome Folder created in Component
[X] Welcome.jsx created in Welcome Folder
    [X] import Welcome.css
    [X] Export to FeedbackForm.jsx
[X] Welcome.css created in Welcome Folder
[] Set up HTML
    [X] Add a header 'Welcome!"
    [X] Paragraph element explaining what this is?
    [X] Add button that takes them to the first page (Feeling)


2. FeedbackForm component
[X] This will be the parent child of all of the 'views' 
[X] Make a state variable for each piece of data we need to send over to the database so we can send it as one package
[X] Import all components
[X] Router created in this component
[] handleSubmit
    [] POST request
    [] dispatch so we can access new feedback in Admin

3. Feeling Page
[X] Feeling Folder created in Components
[X] Feeling.jsx created in Feeling Folder
    [X] import Feeling.css
    [X] Export to FeedbackForm.jsx
[X] Feeling.css 
[X] Set up HTML
    [X] Add header: 'How are you feeling today?'
    [X] Input created for 'Feeling?' 1-5
        [X] this should access props via FeedbackForm
    [X] Next button - takes us to route /understanding

4. Understanding Page
[X] Understanding Folder created in Components
[X] Understanding.jsx created in Understanding Folder
    [X] import Understanding.css
    [X] Export to FeedbackForm.jsx
[X] Understanding.css 
[X] Set up HTML
    [X] Add header: 'How well are you understanding the content?'
    [X] Input created for 'Understanding?' 1-5
        [X] this should access props via FeedbackForm
    [X] Next button = takes us to route /support
    
5. Support Page
[X] Support Folder created in Components
[X] Support.jsx created in Support Folder
    [X] import Support.css
    [X] Export to FeedbackForm.jsx
[X] Support.css 
[X] Set up HTML
    [X] Add header: 'How well are you being supported?'
    [X] Input created for 'Support?' 1-5
        [X] this should access props via FeedbackForm
    [X] Next button - takes us to route /comments

6. Comments Page
[X] Comments Folder created in Components
[X] Comments.jsx created in Comments Folder
    [X] import Comments.css
    [X] Export to FeedbackForm.jsx
[X] Comments.css 
[X] Set up HTML
    [X] Add header: 'Any comments you want to leave?'
    [X] Input create for 'Comments'
        [X] this should access props via FeedbackForm
        [X] HINT: this input can be left blank
    [X] Next button - takes us to route /review

7. Review Page
[X] Set up HTML
    [X] Add header: 'Review Your Feedback'
    [X] Feelings: {score}
    [X] Understanding: {score}
    [X] Support: {score}
    [X] Comments: {comments}
    [X] Submit button
        [] This should post the data to the database so that we can access it on admin
        [] Takes us to route /thanks

8. Thank You Page
[] Set up HTML
    [] Add header: 'Thank You!'
    [] Button - Leave New Feedback
        [] this should take us back to home (/)
        [] and also reset the state variables to be empty

9. Admin Page
[X] feedbackReducer created in Index.jsx
    [X] Case 'GET_FEEDBACK' created
[X] create a GET request with axios 
    [X] Admin.jsx
        [X] .then 
            [X] should dispatch to 'GET_FEEDBACK' and add the response.data as the payload
        [X] .catch
[X] Set up HTML
    [X] table created with 
        Feeling, Comprehension, Support, Comments, Delete button
    [X] should map through the feedbackList to render in the table
    [X] This should get the data from the database to display in the table


### Input Validation

[] Each step should only allow the user to advance to the next step if a score was provided. Be sure to tell the user in some way that a value must be provided.

The `Comments` step does not need to be validated, an empty value is okay.