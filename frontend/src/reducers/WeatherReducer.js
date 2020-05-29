import {WEATHER_IS_FETCHING, WEATHER_ERROR, WEATHER_RESPONSE} from '../action/FetchWeather';
import InitialState from "../store/InitialState";

const allWeatherState = (state = InitialState, action) => {
    switch (action.type) {
        case WEATHER_IS_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case WEATHER_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                serviceError: action.serviceError
            });
        case WEATHER_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload
            });
        default:
            return state;
    }
};

export {allWeatherState};