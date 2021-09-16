import './ExpenseForm.css';
import { useState } from 'react';

// Now I expect to get some props because I set that prop (in NewExpense.js):
const ExpenseForm = (props) => {
    // I can have multiple states inside of the same component, managing and updating them separately:
    const [enteredTitle, setEnteredTitle] = useState('');  
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Using one state instead, passing in an object as a value, grouping the 3 states and updating all 3 properties:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);  

        // Now calling the setUserInput passing in a new object.
        // I need to use the spread operator to copy the other two key value pairs which I'm not updating here:
        // setUserInput({
        //     ...userInput, 
        //     enteredTitle: event.target.value,
        // });

        // Passing a function to setUserInput*:
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    // A function whenever the form is being submitted:
    const submitHandler = (event) => {
        event.preventDefault(); // To prevent the default behavior*

        // To create an object that combines all the entered data:
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,  // When adding multiple values they are added as strings instead of numbers. Fixing it here by enforcing a number conversion (with +).
            date: new Date(enteredDate) // Dates are tricky**
        };

        // Here instead of logging my expenseData, I will access props onSaveExpenseData and execute it here:
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData); // Passing the expenseData as an argument.

        // When the form is submitted I call these, setting them back to an empty string which is the initial state, to clear the inputs:
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    // Now implementing two-way binding***, adding the value attribute inside the input element.
    // Adding a Cancel button which doesn't submit the form but that executes a function when it's pressed:
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                type="text" 
                value={enteredTitle}
                onChange={titleChangeHandler} 
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                type="number" 
                value={enteredAmount}
                min="0.01" 
                step="0.01" 
                onChange={amountChangeHandler} 
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                type="date"
                value={enteredDate}
                min="2019-01-01" 
                max="2022-12-31" 
                onChange={dateChangeHandler} 
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;

/* Notes: *the default browser behavior is that if I click the button, 
the page reloads because the browser automatically sends a request. 
**constructing a new date with the built in date constructor to 
which then I passed the enteredDate, which will parse that date 
string and converted into a date object. 
*** two-way binding simply means that for inputs I don't just listen to 
changes, but I can also pass a new value back into the input. This way  
I feed the state back into the input so that when I change the state, 
I also change the input. */