import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
function Head() {
    return (
        <div>
            <header className="header">
                Prodapt Solutions
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        </div>
    );
}

export default Head;