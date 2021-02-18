import React from 'react';
import { Link } from 'react-router-dom';

export const CardPosts = () => {

    return (
        <div className="shadow-1">
            <div className="card-posts">
                <h3>TITLE</h3>
                <p>{`Body: ${"en Afganistán en la guerra contra el terrorismo. Estoy divorciado desde hace años después de que mi esposo se acostó con mi mejor amigo, así que tuve que dejar el matrimonio, soy el único hijo de mis padres y también tengo un hijo que murió hace mucho tiempo, gracias a Dios finalmente encontré Yo en el ejército de los EE. UU., Bueno, quiero que me conozcan bien, y estoy muy contento de tenerlo aquí."}`}</p>  
                <Link className="card-posts__link" to="/posts">Comments...! </Link>      
            </div>
        </div>
    )
}