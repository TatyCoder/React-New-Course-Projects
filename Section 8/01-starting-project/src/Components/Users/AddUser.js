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

  // This function should be executed when the form is submitted:
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  // I need functions which will be trigger on every keystroke of the input (where I get the event object, because I'll listen to a default DOM event):
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // Adding the onChange prop which will bind input to the event listener:
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;