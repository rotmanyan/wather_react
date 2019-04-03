import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import {weatherReducer} from "./weather/weatherReducer";

const loggerMiddleware = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => "#139BFE",
        prevState: () => "#1c5faf",
        action: () => "#149945",
        nextState: () => "#A47104",
        error: () => "#ff0005"
    }
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = devtools ? devtools : compose;

const store = createStore(
    weatherReducer,
    composeEnchancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
