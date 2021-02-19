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
                <p> This is an application in react that connects to the API https://jsonplaceholder.typicode.com/ where it accesses the server data through three endpoints. It is a complete exercise where all basis of react hook, react router, javaScript and redux are put into practice as a test of knowledge about the front end library, the repository is hosted at https://juliofs12.github.io/geducar-julio-flores-test/. </p>
            </div>
        </section>
    )
}