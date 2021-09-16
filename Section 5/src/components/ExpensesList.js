// Now I need to import these here:
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

// Creating a new const and copying the variable expensesContent from Expenses component:
const ExpensesList = props => {
    // let expensesContent = <p>No expenses found!</p>;  // Not using it anymore.

    // Handling the if case differently, I can always add a if check where  
    // I return a different JSX block if some condition is met:
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found!</h2> 
    }

    // The filteredExpenses no longer exist here, instead I'll use props.items, then returning it inside the <ul>:
    return <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
            />
        ))}
    </ul>

};

export default ExpensesList;