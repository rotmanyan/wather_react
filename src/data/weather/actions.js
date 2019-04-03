export const actionTypes = {
    GET_WEATHER_REQUEST: 'GET_WEATHER_REQUEST',
    GET_WEATHER_SUCCESS: 'GET_WEATHER_SUCCESS',
    GET_WEATHER_ERROR: 'GET_WEATHER_ERROR',
    SELECT_CITY: 'SELECT_CITY',
}

export const getWeatherRequest = () => ({
    type: actionTypes.GET_WEATHER_REQUEST
})

export const getWeatherSuccess = data => ({
    type: actionTypes.GET_WEATHER_SUCCESS,
    payload: data
})

export const getWeatherError = error => ({
    type: actionTypes.GET_WEATHER_ERROR,
    payload: {
        error
    }
})

export const selectCity = data => ({
    type: actionTypes.SELECT_CITY,
    payload: data
})