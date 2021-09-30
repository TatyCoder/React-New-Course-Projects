// To import the Card component which I want to use here:
import Card from '../UI/Card';

// To import the styles using CSS modules:
import styles from './AddUser.module.css'

const AddUser = (props) => {
    // This function should be executed when the form is submitted:
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    // Wrapping the form in the Card component:
    return (
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" />
          <button type="submit">Add User</button>
        </form>
      </Card>
    );
};

export default AddUser;