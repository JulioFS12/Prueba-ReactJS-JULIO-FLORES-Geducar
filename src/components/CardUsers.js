import React from 'react';
import { Link } from 'react-router-dom';

export const CardUsers = ({user}) => {

    const { id, name, username, email, address, company, phone } = user;

    return (
        <div className="shadow-1">
            <div className="card-user">
                <h3>{`USER ${id}`}</h3>
                <hr/>
                <p>{`Name: ${name}`}</p>
                <p>{`User Name: ${username}`}</p>
                <p>{`Email: ${email}`}</p>
                <p>{`Address: ${address.street}`}</p>
                <p>{`Phone: ${phone}`}</p>
                <p>{`Company: ${company.name}`}</p>   
                <Link className="card-user__link" to={`/geducar/posts/${ id }`}>See Posts...! </Link>      
            </div>
        </div>
    )
}