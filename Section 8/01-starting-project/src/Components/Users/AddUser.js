// Now importing useState:
import { useState } from 'react';

// To import the Card component which I want to use here:
import Card from '../UI/Card';

// To import the Button component to use it here:
import Button from '../UI/Button';

// To import the ErrorModal component to use it here:
import ErrorModal from '../UI/ErrorModal';

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
    if (+enteredAge < 1) {
      // By adding a + it forces a conversion of enteredAge to a number (not a string).
      return;
    }
    // Calling the new props here and executing it as a function forwarding the two pieces of data:
    props.onAddUser(enteredUsername, enteredAge);
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

  // Adding the ErrorModal component here:
  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!"/>
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
    </div>
  );
};

export default AddUser;

/* Notes: Since React doesn't allow two side by side components 
being rendered directly as a root element of my return statement, 
I needed to wrap ErrorModal & Card in an extra div. Inside of a 
div I can have adjacent elements. */