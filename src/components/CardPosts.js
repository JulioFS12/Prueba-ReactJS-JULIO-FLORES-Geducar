import React from 'react';
import { Link } from 'react-router-dom';

export const CardPosts = ({post}) => {

    const { id, title, body  } = post;

    return (
        <div className="shadow-1">
            <div className="card-posts">
                <h3>{`${title}`}</h3>
                <p>{`${body}`}</p>  
                <Link className="card-posts__link" to={`/geducar/comments/${id}`}>Comments...! </Link>      
            </div>
        </div>
    )
}