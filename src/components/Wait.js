import React from 'react';
import { wait } from '../assets/images';

export const Wait = () => {
   return(
       <section className="wait-container">
            <h2>Wait please...!</h2>
            <img src={`${wait}`}/>
       </section>
   )
}