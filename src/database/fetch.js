const urlBase = process.env.REACT_APP_API_URL;

export const fetchApi = ( endpoint, modifier, value ) => {


    if ( endpoint === 'users' ) {
        const url = `${urlBase }${ endpoint }`;
        return fetch( url );
    } 
    
    if ( endpoint === 'posts'){
        const url = `${urlBase}${ endpoint }?${modifier}=${value}`;
        return fetch( url );
    }
}