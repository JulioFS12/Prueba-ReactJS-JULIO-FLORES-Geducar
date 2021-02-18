import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardUsers } from './CardUsers';
import { getUsers } from '../redux/actions/usersActions';
import { Wait } from '../components/Wait';

export const Users = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getUsers() );
    },[dispatch]);

    const {getting, users}  = useSelector( selection => selection.users );

    if(getting){
        return <Wait/>
    }

    return (
        <section className="user-container">

            {
                users.map( (user, index) => <CardUsers key={index} user={user}/> )
            }

        </section>
    )
}