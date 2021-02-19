import React from 'react';
import { menu } from '../assets/images';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images';
import { modalShow, modalHide } from '../redux/actions/iuActions';
import { useDispatch, useSelector } from 'react-redux';

export default function NavList() {

    const dispatch = useDispatch();
    

    const { modalOpen } = useSelector(selection => selection.ui);

    const handleClick = (e) => {
        if(modalOpen){
            dispatch( modalHide() );
        }else{
            dispatch( modalShow() );
        }
    }

    var state = '';

    if(modalOpen){
        state = 'nav-show'
    }else{
        state = 'nav-hide'
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
            <nav className={state}>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
            </nav>
        </>
    )

}