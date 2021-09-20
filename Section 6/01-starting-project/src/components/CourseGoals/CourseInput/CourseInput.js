import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';  // I don't need to import this anymore. 

// Adding a new component (I can have multiple components per file), then copying the CourseInput.css file but getting rid of the selectors:
const FormControl = styled.div`
  margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }

  &.invalid label {
    color: red;
  }
`;

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

  // Now replacing the div with the new FormControl component and adjusting the conditions inside className: if it is invalid, the invalid class is getting added:
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid && 'invalid'}> 
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
