import React from 'react';
import { welcome } from '../assets/images';


export const Welcome = (props) => {

    return (
        <section className="welcome-container ">
                <div className="welcome-container__title animate__animated  animate__backInLeft">
                    <p>Welcome to</p>
                    <p>Geducar React App</p>
                </div>
                <img src={`${welcome}`} />
        </section>
    )
}