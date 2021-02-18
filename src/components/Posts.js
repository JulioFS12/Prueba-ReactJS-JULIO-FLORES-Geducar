import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../redux/actions/postsActions';
import { CardPosts } from './CardPosts';
import { Wait } from './Wait';

export const Posts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPost() );
    },[dispatch]);

    const {getting, posts}  = useSelector( selection => selection.posts );

    if(getting){
        return <Wait/>
    }
    
    return (
        <section className="posts-container">
        {
            posts.map((post, index) => (
                <CardPosts key={index} post={post} />
            ))
        }
        </section>
    )
}