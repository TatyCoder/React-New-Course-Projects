// To import the Card component which I want to use here:
import Card from '../UI/Card';

// To import the Button component to use it here:
import Button from '../UI/Button';

// To import the styles using CSS modules:
import styles from './AddUser.module.css'

const AddUser = (props) => {
    // This function should be executed when the form is submitted:
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    // Now using the Button component:
    return (
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    );
};

export default AddUser;