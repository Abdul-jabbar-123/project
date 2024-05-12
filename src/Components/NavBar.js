import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return (
        <header className='nav-list'>

         <div className='logo'>PORTFOLIO</div>

        <nav className='className="link-tag"'>
            <ul>
                <li><Link to="/"className="link-tag">Home</Link></li>
                <li><Link to="/portfolio"className="link-tag">PortFolio</Link></li>
                <li><Link to="/about " className="link-tag">About</Link></li>
                <li><Link to="/contact" className="link-tag">Contact</Link></li>
            </ul>
        </nav>
        </header>
    );
};

export default NavBar;
