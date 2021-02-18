import React from 'react';
import { Link } from 'react-router-dom';

export const CardUsers = () => {

    return (
        <div className="shadow-1">
            <div className="card-user">
                <h3>TITLE</h3>
                <hr/>
                <p>{`Name: ${"Julio Flores"}`}</p>
                <p>{`User Name: ${"JulioFS12"}`}</p>
                <p>{`Email: ${"Julioflores@gmail.com"}`}</p>
                <p>{`Address: ${"Av. Rock Start"}`}</p>
                <p>{`Phone: ${"+45 2342 23423 23423"}`}</p>
                <p>{`Company: ${"Hotel Arias"}`}</p>   
                <Link className="card-user__link" to="/posts">See Posts...! </Link>      
            </div>
        </div>
    )
}