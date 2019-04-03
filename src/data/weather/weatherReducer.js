import {actionTypes} from './actions'
import {combineReducers} from 'redux'

const firstState = []

const firstReducer = (state = firstState, {type, payload}) => {
    switch (type) {
        case actionTypes.GET_WEATHER_SUCCESS:
            return [...state, payload.city.name]
        case actionTypes.GET_WEATHER_ERROR:
            return [...state]
        default:
            return [...state]
    }
}

const secondState = []

const secondReducer = (state = secondState, {type, payload}) => {
    switch (type) {
        case actionTypes.GET_WEATHER_SUCCESS:
            return [...state, payload.list]
        case actionTypes.GET_WEATHER_ERROR:
            return [...state]
        default:
            return [...state]
    }
}

const selectState = ''

const selectReducer = (state = selectState, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECT_CITY:
            return payload
        default:
            return state
    }
}

export const weatherReducer = combineReducers({
    select_cities: firstReducer,
    items: secondReducer,
    selected: selectReducer
})
