import React, {Component} from 'react';
import * as selector from '../data/weather/selector'
import './details.css'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class Details extends Component {
    state = {
        selector: null
    }

    componentDidMount() {
        this.findSelected()
    }

    componentWillUnmount() {
        this.setState({selector: null})
    }

    findSelected = () => {
        const {select_cities, selected} = this.props

        select_cities.find((element, index) => element.toLowerCase() === selected.toLowerCase() && this.setState({selector: index}))
    }

    render() {
        const {items, select_cities} = this.props
        const {selector} = this.state
        return (
            <div>
                Details
                <div className='flex'>
                    {select_cities.map(
                        (el, id) => {
                            return (id === selector &&
                                <div key={id}>
                                    <p>City:{el}</p>
                                    <div>
                                        <div>Temp:{items[id].map((item, index) => index < 5 &&
                                            <p key={item.dt}>{item.main.temp}</p>)}</div>
                                        <div>Humidity:{items[id].map((item, index) => index < 5 &&
                                            <p key={item.dt}>{item.main.humidity}</p>)}</div>
                                        <div>Pressure:{items[id].map((item, index) => index < 5 &&
                                            <p key={item.dt}>{item.main.pressure}</p>)}</div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                <p>
                    <button>
                        <NavLink to='/'>Dashboard</NavLink>
                    </button>
                </p>
            </div>
        );
    }
}

const MSTP = state => ({
    items: selector.items(state),
    select_cities: selector.select_cities(state),
    selected: selector.selected(state),
})

export default connect(MSTP)(Details)
