import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav(){

    const navStyle ={
        color: 'white',
        textDecoration: 'none',
    };

    return(
        <nav className="navigation-bar">
            <ul className="nav-links">
                <li>
                    <Link style={navStyle} to="/" >About</Link>
                </li>
                <li><div className="menuButton">Menu</div>
                    <div style={navStyle} className="subMenu1">
                        <ul>
                                <li> <Link to="/option1" style={navStyle} >Search recipes</Link></li>
                                <li> <Link to="/option2" style={navStyle} >My favorite recipes</Link></li>
                        </ul>
                    </div>
                </li>
            <li>
                <Link style={navStyle} to="/menu">Additional Info</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Nav;
