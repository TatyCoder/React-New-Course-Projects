import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

// To pass the expenseData to NewExpense by adding a new prop*.
// Adding a new state here which should be conditionally render on the screen:
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {  
            ...enteredExpenseData,  // To copy the object which I generate into submitHandler.
            id: Math.random().toString()  // Adding the new id key.
        };

        // Here instead of logging my expenseData, I will access props onAddExpense and execute it here:
        // console.log(expenseData);
        props.onAddExpense(expenseData);  // Passing the generated expenseData as an argument**.
        setIsEditing(false);  // To close the form if it's submitted.
    };

    // Adding a new function which should be trigger when the 'Add New Expense' button is clicked:
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    // Adding a new function which should be trigger when the 'Cancel' button is clicked:
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    // Adding the new prop (name of my choice, starting with on...) to ExpenseForm*.
    // Now I want to render this form conditionally, sometimes instead of the form I'll show this  
    // new button, using the IsEditing state to control which of the two elements is shown,  
    // if isEditing is false I'll show the button and if it's true I'll show the form:
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && (
            <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />
        )}
    </div>
};

export default NewExpense;

/* Notes: *the value for this prop should be a function which can then  
be called inside of the ExpenseForm component. Hence, it's a function I  
should define here in NewExpense before I return the JSX code.
I can create my own event props, and I can expect functions as values and 
that would allow me to pass a function from a parent component to a child 
component and then call that function inside of the child component. And 
when I call the function, I can pass data to that function as a parameter 
and that's how I can communicate up: from child to parent. 
So it's this function defined here in the NewExpense component which I'll 
now execute in a different component, inside of ExpenseForm to be precise. 
And I can execute the function even though it's not defined inside of 
ExpenseForm because I'm passing a pointer through the onSaveExpenseData. 
** By passing data to that function I'm lifting that data, that state up. 
I'm not keeping expenseData here in the NewExpense component, instead I'm 
lifting it up to the App component so I can use it there or I can pass the   
data down to another component via props. The Expenses component is the 
component where I need the data in the end, so it is the App component 
where I wanna lift the state up to. */