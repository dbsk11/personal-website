import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const handleClick = (evt) => {
        props.history.push("/")
    };

    return (
        <div className="main">
             <div className="header">
                <h1>Jessica Kim</h1>
            </div>
            <div className="navbar">
                <NavLink
                    to="/projects/"
                    exact
                    className="link"
                    activeStyle={{color: 'tomato'}}
                    onClick={handleClick}
                >Projects</NavLink>
                <NavLink
                    to="/resume"
                    exact
                    className="link"
                    activeStyle={{color: 'tomato'}}
                    onClick={handleClick}
                >Resume</NavLink>
                <NavLink
                    to="/"
                    exact
                    className="link"
                    activeStyle={{color: 'tomato'}}
                    onClick={handleClick}
                >About Me</NavLink>
            </div>
        </div>
       
    );
};

export default Header;