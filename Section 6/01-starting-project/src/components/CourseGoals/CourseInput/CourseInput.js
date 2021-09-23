import React, { useState } from 'react';
// import styled from 'styled-components';  // I can get rid of this import because I'll use CSS Modules.

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';  // To import from a css file (which need to be renamed) when using CSS Modules. 

// I can now use the invalid prop here between the backticks using a special syntax:
// const FormControl = styled.div`
//   margin: 0.5rem 0;
  
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     // If the props.invalid is true I set a color of red; otherwise, a color of black:
//     color: ${props => (props.invalid ? 'red' : 'black')}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     // If the props.invalid is true I return red as a text:
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     // And now setting background here:
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

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

  // I'll go back to the old div (replacing FormControl), and I will add a className and refer to styles:
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}> 
      {/* Using this special syntax for accessing the properties with dashes on them, and adding dynamic classes with CSS Modules. */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
