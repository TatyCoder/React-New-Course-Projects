import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterHandler = (event) => {
        // console.log(event.target.value);
        props.onYearFilter(event.target.value);
    };

    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.onSelected} onChange={filterHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option values='2020'>2020</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;