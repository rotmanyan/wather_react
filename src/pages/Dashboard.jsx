import React, {Component} from 'react';
import {connect} from "react-redux";
import {getWeather} from "../data/weather/operations";
import {selectCity} from "../data/weather/actions";
import {Link} from "react-router-dom";
import * as selector from "../data/weather/selector";

class Dashboard extends Component {
    state = {
        input: ''
    }
    sendRequest = e => {
        const {getWatch} = this.props
        const {input} = this.state

        e.preventDefault()
        getWatch(input)

    }

    selector = e => {
        this.props.selectCity(e.target.title)
    }

    setInput = e => this.setState({input: e.target.value})

    render() {
        const {getWatch, items, select_cities} = this.props
        const {input} = this.state

        return (
            <div>
                Dashboard
                <br/>
                <hr/>
                <form onSubmit={this.sendRequest}>
                    <input value={input} onChange={this.setInput} type="text"/>
                    <input type="submit" value='watch'/>
                </form>
                <br/>
                <input type='submit' value='kherson' onClick={e => getWatch(e.target.value)}/>
                <input type='submit' value='odessa' onClick={e => getWatch(e.target.value)}/>
                <input type='submit' value='kyiv' onClick={e => getWatch(e.target.value)}/>
                <input type='submit' value='donetsk' onClick={e => getWatch(e.target.value)}/>
                <input type='submit' value='lutsk' onClick={e => getWatch(e.target.value)}/>
                <input type='submit' value='cherkasy' onClick={e => getWatch(e.target.value)}/>
                <input type='submit' value='uman' onClick={e => getWatch(e.target.value)}/>
                <input type='submit' value='kharkiv' onClick={e => getWatch(e.target.value)}/>
                <hr/>
                <div className='flex'>
                    {select_cities.map(
                        (el, id) => {
                            return (
                                <div key={id}>
                                    <p>City:
                                        <Link to='/details' title={el} onClick={this.selector}>{el}</Link>
                                    </p>
                                    <div>{items[id].map((item, index) => {
                                        return (index < 1 &&
                                            <div key={item.dt}>
                                                <p>Temp: {item.main.temp}</p>
                                                <p>Humidity: {item.main.humidity}</p>
                                                <p>Pressure: {item.main.pressure}</p>
                                            </div>
                                        )
                                    })}</div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        );
    }
}

const MSTP = state => ({
    items: selector.items(state),
    select_cities: selector.select_cities(state)
})

const MDTP = {
    getWatch: getWeather,
    selectCity
}

export default connect(MSTP, MDTP)(Dashboard)
