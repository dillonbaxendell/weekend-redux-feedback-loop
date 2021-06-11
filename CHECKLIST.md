## TO-DO LIST

### Setup
[] npm install
[] npm run server
[] npm run client

//? What's missing?
[] Setup router in App.jsx
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

Set up (7) components 

1. Welcome Page
[] Set up HTML
    [] Add a header 'Welcome!"
    [] Paragraph element explaining what this is?
    [] Add button that takes them to the first page (Feeling)

2. Feeling Page
[] Set up HTML
    [] Add header: 'How are you feeling today?'
    [] Input created for 'Feeling?' 1-5
        [] this should dispatch to feedbackReducer feeling: score ???
    [] Next button - takes us to route /understanding

3. Understanding Page
[] Set up HTML
    [] Add header: 'How well are you understanding the content?'
    [] Input created for 'Understanding?' 1-5
        [] this should dispatch to feedbackReducer understanding: score ????
    [] Next button = takes us to route /support
    
4. Support Page
[] Set up HTML
    [] Add header: 'How well are you being supported?'
    [] Input created for 'Support?' 1-5
        [] this should dispatch to feedbackReducer support: score ????
    [] Next button - takes us to route /comments

4. Comments Page
[] Set up HTML
    [] Add header: 'Any comments you want to leave?'
    [] Input create for 'Comments'
        [] this should dispatch to feedbackReducer comments: with whatever they left here
        [] HINT: this input can be left blank
    [] Next button - takes us to route /review

5. Review Page
[] Set up HTML
    [] Add header: 'Review Your Feedback'
    [] Feelings: {score}
    [] Understanding: {score}
    [] Support: {score}
    [] Comments: {comments}
    [] Submit button
        [] This should post the data to the database so that we can access it on admin
        [] Takes us to route /thanks

6. Thank You Page
[] Set up HTML
    [] Add header: 'Thank You!'
    [] Button - Leave New Feedback
        [] this should take us back to home (/)
        [] and also reset the feedbackReducer to be empty

7. Admin Page
[] Set up HTML
    [] table created with 
        Feeling, Comprehension, Support, Comments, Delete button
    [] This should get the data from the database to display in the table


