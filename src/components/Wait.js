import React from 'react';
import { wait } from '../assets/images';

export const Wait = () => {
   return(
       <section className="wait-container">
            <h2>Please Wait...!</h2>
            <img src={`${wait}`} alt="wait"/>
       </section>
   )
}