import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar-style'>
                <ul>
                    <li className='navbar-items'><NavLink to="/">Home</NavLink></li>
                    <li className='navbar-items'><NavLink to="/counter">Counter</NavLink></li>
                    <li className='navbar-items'><NavLink to="/contact">Basket</NavLink></li>
                </ul>
            </div>
        )
    }
}
