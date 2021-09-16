import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
  //  By initializing my state with useState this component function will be called again when the state changes:
  const [title, updateTitle] = useState(props.title);  // The initial value is props.title.
  // This is an array destructuring [], to store both elements in separate variables or constants.
  
  // This is a function which I attached to an event listener so that it's called by React when that event occurs:
  const clickHandler = () => {
    // By calling this state updating function, I'm telling React that I wanna assign a new value to this state:
    updateTitle('Updated!');  // And then I just passed a new value as an argument.
    console.log(title);
    // console.log('Clicked!');
  };

  // For semantic reasons I want to switch from having a div being rendered to a list item instead, 
  // so I'll wrap the entire Card with a <li>:
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;

/* Notes: useState always returns an array with two elements, where the first element is  
the current state value. And the second element is the function which updates that value.

useState is a React hook, all these hooks can be recognized by the fact that they start 
with the word "use" in their name, and all these hooks must only be called inside of 
component functions like ExpenseItem, in this case. 

I will be assigning new values by calling the state updating function (that's how state works). 
I'm not assigning values with the equal sign. */