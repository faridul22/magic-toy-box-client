import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {
    return (
        <div className='link-container'>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "active" : "text-light"}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;