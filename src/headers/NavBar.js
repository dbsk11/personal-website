import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    display: 'flex',
    justifyContent: 'center',
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    color: 'black',
    font: '20px',
    fontFamily: 'Open Sans'
};

const NavBar = (props) => {
    // HandleClick for NavLinks
    const handleClick = (evt) => {
        props.history.push("/")
    };
    
    return (
        <div className="navbar">
            <NavLink
                to="/projects/"
                exact
                style={link}
                activeStyle={{color: 'blue'}}
                onClick={handleClick}
            >Projects</NavLink>
            <NavLink
                to="/resume"
                exact
                style={link}
                activeStyle={{color: 'blue'}}
                onClick={handleClick}
            >Resume</NavLink>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{color: 'blue'}}
                onClick={handleClick}
            >About Me</NavLink>
        </div>
    );
};

export default NavBar;