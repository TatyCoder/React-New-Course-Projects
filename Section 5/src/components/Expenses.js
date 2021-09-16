import { useState } from 'react';
// import ExpenseItem from './ExpenseItem';  // Here I don't need this anymore.
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';  // Here I now import this.
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const selectYearHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // For restructuring I removed the variable expensesContent from here.
    // Here I now wanna output my ExpensesList instead of expensesContent, and the filteredExpenses 
    // should now be passed to ExpensesList through the items prop:
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    onSelected={filteredYear} 
                    onYearFilter={selectYearHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;