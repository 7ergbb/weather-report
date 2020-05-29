import axios from 'axios';

export const WEATHER_RESPONSE = 'WEATHER_RESPONSE';
export const WEATHER_ERROR = 'WEATHER_ERROR';
export const WEATHER_IS_FETCHING = 'WEATHER_IS_FETCHING';

export const getWeather = (days) => {
  return dispatch => {
    dispatch(isFetching());
    axios
      .get(`http://127.0.0.1:5000/weather/${days}`)
      .then(res => {
        dispatch(displayResult(res.data.data));
      })
      .catch(err => {
        dispatch(displayError(err.message));
      });
  };
};

export const displayResult = (json) => ({
    type: WEATHER_RESPONSE,
    payload: json
});

export const isFetching = () => ({
    type: WEATHER_IS_FETCHING
});

export const displayError = (serviceError) => ({
    type: WEATHER_ERROR,
    serviceError: serviceError
});