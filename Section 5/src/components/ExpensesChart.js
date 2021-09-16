import Chart from './Chart';

// Created to use the chart and pass in the data points, the goal is to return the Chart:
const ExpensesChart = (props) => {
    // To set up the dataPoints, it will be an array with several objects because every dataPoint will be an object:
    const chartDataPoints = [
        { label: 'Jan', value: 0 }, // Initial value is zero.
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of props.expenses) {  // Using a for of since props.expenses is an array.
        const expenseMonth = expense.date.getMonth();  // Jan has index zero in the array.
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;

/* Notes: In Chart.js file, when I map through dataPoints I access 
values like label and value on the given dataPoint. So these objects 
should have a label and a value key. 
I don't wanna have zero for every dataPoint. Instead, I wanna have 
a look at the filtered expenses and make sure that I go through  
all the expenses for a selected year and then sum up the expenses  
for all the different months and I assign them to the dataPoints.  
So therefore I expect to get the filteredExpenses as a prop on 
ExpensesChart component because I will use ExpensesChart in the 
Expenses.js file later.
Adding a for of loop to loop through all the expenses, which I get via 
props and then I look at every expense, get the month of that expense and 
updates the value of the appropriate dataPoint by the expense amount. So 
that I increase the value of a given month by that expense amount. And I go 
through all expenses to sum up all the expenses for the different months and 
assign the values to the appropriate months or to the appropriate dataPoints. */