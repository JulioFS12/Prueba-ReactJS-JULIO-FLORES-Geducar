import React from 'react';
import { useDispatch } from 'react-redux';
import { welcome } from '../assets/images';
import { modalSet } from '../helpers/modalSet';


export const Welcome = () => {

    const dispatch = useDispatch();
    modalSet( dispatch );

    return (
        <section className="welcome-container ">
                <div className="welcome-container__title animate__animated  animate__backInLeft">
                    <p>Welcome to</p>
                    <p>Geducar React App</p>
                </div>
                <img src={`${welcome}`} alt="welcome"/>
        </section>
    )
}