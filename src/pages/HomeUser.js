import React from 'react';
import NavList from '../components/NavList';
import { Welcome } from '../components/Welcome';
import {
    Switch,
    Route
  } from "react-router-dom";
import { About } from '../components/About';
import { Users } from '../components/Users';
import { Posts } from '../components/Posts';
import { Comments } from '../components/Comments';

const HomeUser = () => {

    return (

        <main className="home-user">
            <NavList />
            <div>
                <Switch>
                    <Route exact={true} path={`/geducar/`}>
                        <Welcome />
                    </Route>
                    <Route exact={true} path={`/geducar/users`}>
                        <Users />
                    </Route>
                    <Route exact={true} path={`/geducar/about`}>
                        <About />
                    </Route>
                    <Route exact={true} path={`/geducar/posts/:postUserId`}>
                        <Posts />
                    </Route>
                    <Route exact={true} path={`/geducar/comments/:commentsPostId`}>
                        <Comments />
                    </Route>
                </Switch>
            </div>
        </main>
    )

}

export default HomeUser;