import React from 'react';
import { menu } from '../assets/images';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images';
export default function NavList() {

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <>
            <nav className="nav-container back-nav">
                <img className="back-nav" src={`${logo}`}/>
                <Link to="/" className="back-nav">Home</Link>
                <Link to="/users" className="back-nav">Users</Link>
                <Link to="/about" className="back-nav">About</Link>
            </nav>
            <nav className="nav-container-2 back-nav">
                <img className="back-nav" src={`${logo}`}/>
                <button className="back-nav" onClick={ handleClick }>
                    <img className="back-nav" src={ `${menu}` }/>
                </button>
            </nav>
        </>

    )

}