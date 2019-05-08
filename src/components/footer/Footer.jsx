import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-style'>
                <ul>
                    <li className='footer-items'><NavLink to="/legals">Legals</NavLink></li>
                    <li className='footer-items'>	&#9400; Isaure Blaffa</li>
                    <li className='footer-items'><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        )
    }
}