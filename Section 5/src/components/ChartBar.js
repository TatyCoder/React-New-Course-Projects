import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" 
            style={{height: barFillHeight}}
            ></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
};

export default ChartBar;

/* Notes: I will definitely need props because I'm defining some props in the Chart component. 
How much I fill the bar depends on the data I'm receiving, so it's depends on the value 
because the chart bar fills by putting the value in relation with the maxValue.
I set the style of an element dynamically by adding the style prop with double {} because 
this style wants a JavaScript object (created with {}) as a value, for property names I  
should use the camel case version, i.e., backgroundColor: 'white'. 
I can dynamically output props.label so that the label is visible. */