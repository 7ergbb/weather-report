import { combineReducers } from 'redux';
import {allWeatherState} from './WeatherReducer'

const rootReducer = combineReducers({
    allWeatherState
});

export default rootReducer;