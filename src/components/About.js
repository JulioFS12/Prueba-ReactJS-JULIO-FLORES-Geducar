import React from 'react';
import { useDispatch } from 'react-redux';
import { modalSet } from '../helpers/modalSet';

export const About = () => {

    const dispatch = useDispatch();
    modalSet( dispatch );

    return (
        <section className="about-container">
            <div className="about-container__text">
                <h2>About</h2>
                <p> This is an application in react that connects to the API https://juliofs12.github.io/geducar-julio-flores-test/. </p>
            </div>
        </section>
    )
}