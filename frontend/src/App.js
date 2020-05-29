import React, { Component } from "react";
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';
import WeatherReportControl from './components/WeatherReportControl'
import { connect } from 'react-redux';
import { getWeather } from './action/FetchWeather'
import './App.css';

const DAYS_NUMBER = 2

export class App extends Component {

  componentDidMount = () => {
    this.props.dispatch(getWeather(DAYS_NUMBER));
  };

  updateWeather = (delta) => {
    this.props.dispatch(getWeather(delta))
  }

  getOption = (isTemperature) => {
    const { currentWeather } = this.props;
    const indicator = isTemperature ? 'temperature' : 'pressure'
    let indicator_values = [];
    let dateTime = [];
    if (!currentWeather.isFetching && currentWeather.data) {
      currentWeather.data.forEach(element => {
        dateTime.push(element['days']);
        indicator_values.push(element[indicator]);
      });
    }
    return {
      title: { 
        text: `${indicator} report for period ${dateTime[0]} - ${dateTime[dateTime.length - 1]}`, 
        left: 'center'
      },
      tooltip: { trigger: 'axis' },
      grid: {left: '3%', right: '4%', bottom: '3%', containLabel: true},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dateTime
      },
      yAxis: {
        type: 'value',
        min: isTemperature ? -60 : 900,
        max: isTemperature ? 60 : 1100
      },
      series: [{ name: indicator, type: 'line', smooth: true, data: indicator_values }]
    }

  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1>Weather report</h1>
          <div className="App-report">
            <ReactEcharts
              option={this.getOption(true)}
              style={{ height: '350px', width: '100%' }}
              className='react_for_echarts' />
          </div>
          <div className="App-report">
            <ReactEcharts
              option={this.getOption(false)}
              style={{ height: '350px', width: '100%' }}
              className='react_for_echarts' />
          </div>
          <WeatherReportControl on_change={this.updateWeather}/>
        </div>
      </div >
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  currentWeather: PropTypes.any,
};

const mapStateToProps = state => {
  return {
    currentWeather: state.allWeatherState,
  }
};

export default connect(mapStateToProps)(App);
