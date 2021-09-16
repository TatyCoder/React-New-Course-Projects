// Now importing useState:
import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

// The goal will be to add the new expense which the user entered to this list of existing expenses.
// Extracting this constant out of the App component:
const expensesList = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450.99,
    date: new Date(2021, 5, 12),
  },
];

// Now inside of the App component function I call useState:
const App = () => {
  const [expenses, setExpenses] = useState(expensesList);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;