import React from 'react';
import { FaAdn } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function NavList() {


    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <>
            <nav className="nav-container back-nav">
                <h3 className="back-nav">React-Geducar</h3>
                <Link to="/" className="back-nav">Home</Link>
                <Link to="/users" className="back-nav">Users</Link>
                <Link to="/about" className="back-nav">About</Link>
            </nav>
            <nav className="nav-container-2 back-nav">
                <h3 className="back-nav">React-Geducar</h3>
                <button className="back-nav" onClick={ handleClick }>
                    <img className="back-nav" src={ FaAdn }/>
                </button>
            </nav>
        </>
        
    )

}