import React from 'react';
import { Link } from 'react-router-dom';
import { back, commet } from '../assets/images';

export const AllPost = ({ idUser }) => {

    return (
        <div className="all-users">
            <Link to={`/geducar-julio-flores-test/users`}>
                <img style={{ width: '40px' }} src={`${back}`} />
            </Link>
            <img src={`${commet}`} alt="post"/>
            <h2>{`Posts of user ${idUser}`}</h2>
        </div>
    )
}