import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import LineChart from './line-chart.jsx';
import Home from './home.jsx';

class Main extends Component {
    render() {
        return (
            <HashRouter>  
            <div>
                <h1 className='header'>Create Your Chart With CSV</h1>
                <ul className="navbar">
                    <li className='nav'> <NavLink exact to="/Home">Home </NavLink></li>
                    <li className='nav'><NavLink to="/LineChart">LineChart</NavLink></li>
                </ul>
                <div className="content">
                <Route path="/Home" component={Home} />
                <Route path="/LineChart" component={LineChart} />
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;