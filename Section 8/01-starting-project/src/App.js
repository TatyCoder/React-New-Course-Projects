import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

// Managing the users array here with useState, it's still an empty array but now I have a   
// function that will update the UsersList component since it's part of the App component:
function App() {
  const [usersList, setUsersList] = useState([]);

  // Defining a function here to create a new user object and adding it to the list array:
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {  
      return[...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });  // I update the state by taking the old list and appending a new element to it.
  };

  // I forward the usersList to the UsersList component here. Also adding a props on AddUser:
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;

/* Notes: I wanna make sure that when I click the Add User button and the AddUser component,
I don't just log the user data but instead I really create a new user object with that data,
and I add that to an array of users object, which I then output in the users list. */