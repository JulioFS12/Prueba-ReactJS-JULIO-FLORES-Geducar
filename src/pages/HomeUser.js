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
                    <Route exact={true} path={`/geducar-julio-flores-test`}>
                        <Welcome />
                    </Route>
                    <Route exact={true} path={`/geducar-julio-flores-test/users`}>
                        <Users />
                    </Route>
                    <Route exact={true} path={`/geducar-julio-flores-test/about`}>
                        <About />
                    </Route>
                    <Route exact={true} path={`/geducar-julio-flores-test/posts/:postUserId`}>
                        <Posts />
                    </Route>
                    <Route exact={true} path={`/geducar-julio-flores-test/comments/:commentsPostId`}>
                        <Comments />
                    </Route>
                </Switch>
            </div>
        </main>
    )

}

export default HomeUser;