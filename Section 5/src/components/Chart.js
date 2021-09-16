import ChartBar from './ChartBar';
import './Chart.css';

// Here I want to return some JSX code where I have all the chart bars:
const Chart = (props) => {
    // To transform the dataPoint object to just a number, map will return a brand new array of 12 values (months):
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    // To calculate the total maxValue across all months:
    const totalMaximum = Math.max(...dataPointValues);  
    // Using the spread operator to pull out all the array elements and add them as standalone arguments, which are these 12 values.

    return <div className="chart">
        {props.dataPoints.map(dataPoint => (
            <ChartBar
                key={dataPoint.label} 
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label} 
            />
        ))}
    </div>
};

export default Chart;

/* Notes: I will output the chart bars dynamically by going through an array 
of dataPoints and mapping every dataPoint to a ChartBar. So, that I create as 
many ChartBar components as I have dataPoints, and define which kind of data
I expect to extract there. So, that dataPoint is an object which has a value, 
maxValue, label (months) and key (label = id) as properties. */