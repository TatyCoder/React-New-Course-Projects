import React from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

// Rendering the UsersList component here, and setting the users prop to an empty array:
function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]}/>
    </div>
  );
}

export default App;
