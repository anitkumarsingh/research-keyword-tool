import React from 'react';
import './NavBar.css';


const Nav = () =>{
    return(
        <div className="nav-container">
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="/" className="links-place">Keyword</a></li>
                    <li><a href="/" className="links-place">Extended</a></li>
                    <li><a href="/" className="links-place">ASIN</a></li>
                    <li><a href="/" className="links-place">Translate</a></li>
                </ul>
            </nav>
      </div>
    );
}

export default Nav;