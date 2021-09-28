const AddUser = (props) => {
    // This function should be executed when the form is submitted:
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    // In JSX, htmlFor is the name for assigning a for attribute to a label:
    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;