import React from 'react'
import '../App.css';
import NumericInput from 'react-numeric-input';

const WeatherReportControl = ({ on_change}) => {
    return (
        <div className="App-report-control">
            <label>Select the number of days for report: </label>
            <NumericInput min={0} max={100} onChange={(x) => on_change(x)}/>
        </div>
    );
};

export default WeatherReportControl;