import React from 'react';
import './Four.css';

import { NavLink } from 'react-router-dom';

export default function Four(){
    return (
        <div className='Four'>
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">Main</NavLink>
                </li>
                <li>
                    <NavLink to="/two" activeClassName="active">Two</NavLink>
                </li>
                <li>
                    <NavLink to="/three" activeClassName="active">Three</NavLink>
                </li>
            </ul>
            
        </div>
    );
}