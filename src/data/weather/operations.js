import axios from 'axios'

import {
    getWeatherRequest,
    getWeatherSuccess,
    getWeatherError
} from './actions'

import {urlForecast, urlToken} from '../baseUrl'

export const getWeather = credentials => dispatch => {
    dispatch(getWeatherRequest())

    const option = `${urlForecast}${credentials},${urlToken}`

    axios.get(option)
        .then(({data}) => {
                return dispatch(getWeatherSuccess(data))
            }
        )
        .catch(error => {

            return dispatch(getWeatherError(error))
        })
}