import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { back } from '../assets/images';
import { getComments } from '../redux/actions/commentsActions';
import { CardComments } from './CardComments';
import { Wait } from './Wait';

export const Comments = () => {

    const dispatch = useDispatch();
    const { commentsPostId } = useParams();

    useEffect(() => {
        dispatch( getComments( commentsPostId ) );
    },[dispatch]);

    const {getting, comments}  = useSelector( selection => selection.comments );


    if(getting){
        return <Wait/>
    }

    return (
        <section className="complete-container">
            <div className="complete-container__card-complete">
            <Link to={`/geducar-julio-flores-test/users`}>
                <img style={{ width: '40px' }} src={`${back}`} />
            </Link>
            <h1>{`Comments of post ${commentsPostId}`}</h1>
            {
                comments.map((comment, index) => (
                    <CardComments key={index} comment={comment}/>
                ))
            }
            </div>
        </section>
    )
}