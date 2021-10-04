// Now importing useState:
import { useState } from 'react';

// To import the Card component which I want to use here:
import Card from '../UI/Card';

// To import the Button component to use it here:
import Button from '../UI/Button';

// To import the styles using CSS modules:
import styles from './AddUser.module.css'

// Initializing useState here:
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  // Adding validation and resetting logic:
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {  // By adding a + it forces a conversion of enteredAge to a number (not a string).
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  // I need functions which will be trigger on every keystroke of the input (where I get the event object, because I'll listen to a default DOM event):
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // Adding the value props to reflect my current state in the inputs when the form is submitted:
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          type="text" 
          value={enteredUsername} 
          onChange={usernameChangeHandler} 
        />
        <label htmlFor="age">Age (Years)</label>
        <input 
          id="age" 
          type="number" 
          value={enteredAge} 
          onChange={ageChangeHandler} 
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;