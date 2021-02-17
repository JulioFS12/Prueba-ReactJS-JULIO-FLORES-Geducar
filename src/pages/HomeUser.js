import React from 'react';
import NavList from '../components/NavList';
import { Welcome } from '../components/Welcome';
import {
    Switch,
    Route
  } from "react-router-dom";
import { About } from '../components/About';
import { Users } from '../components/Users';

const HomeUser = () => {

    return (

        <main className="home-user">
            <NavList />
            <div>
                <Switch>
                    <Route exact={true} path="/">
                        <Welcome />
                    </Route>
                    <Route exact={true} path="/users">
                        <Users />
                    </Route>
                    <Route exact={true} path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </main>
    )

}

export default HomeUser;