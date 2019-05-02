import React from 'react';
import './NavBar.css';


const Nav = () =>{
    return(
        <div className="nav-container">
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="/Research-Keyword-Tool/Keyword" className="links-place">Keyword</a></li>
                    <li><a href="/Research-Keyword-Tool/Extended" className="links-place">Extended</a></li>
                    <li><a href="/Research-Keyword-Tool/ASIN" className="links-place">ASIN</a></li>
                    <li><a href="/Research-Keyword-Tool/Translate" className="links-place">Translate</a></li>
                </ul>
            </nav>
      </div>
    );
}

export default Nav;