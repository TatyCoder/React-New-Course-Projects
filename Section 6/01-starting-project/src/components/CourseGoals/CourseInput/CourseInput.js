import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

// Adding a state as an indicator for however the user entered something valid or not:
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);  // As long as this is true, I considered the input as valid.

  // To reset styles when something valid was entered:
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  // Adding an if statement to check whether something valid was entered (can't add empty goals nor blanks):
  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length  === 0) {
      setIsValid(false);  // Because what the user entered and submitted definitely is not valid.
      return;  
    }  // In this case onAddGoal will not be executed because functional execution stops when I return.
    props.onAddGoal(enteredValue);
  };

  // Setting dynamic inline styles, changing it to red if the input is invalid:
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input 
          style={{
            borderColor: !isValid ? 'red' : 'black',
            background: !isValid ? 'salmon' : 'transparent' 
          }} 
          type="text" 
          onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
