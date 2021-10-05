// To import the Card component which I want to use here:
import Card from '../UI/Card';

// To import the styles using CSS modules:
import styles from './UsersList.module.css';

const UsersList = (props) => {
    return (
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <li>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    );
};

export default UsersList;

/* Notes: I rely on props to get my actual array of users as data, between the unordered list.
With map() I return a JSX element (a simple list item) for every user of that users array I 
expect to get on this prop. My expectation here is that users is an array of user objects
where every object has a name property and an age property. */