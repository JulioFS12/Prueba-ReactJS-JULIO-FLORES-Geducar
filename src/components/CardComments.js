import React from 'react';

export const CardComments = ({ comment }) => {

    const { email, name, body } = comment;

    return (
        <div className="card-comments">
            <p>{`Email: ${email}`}</p>
            <p>{`Name: ${name}`}</p>
            <p>{body}</p>
        </div>
    )
}