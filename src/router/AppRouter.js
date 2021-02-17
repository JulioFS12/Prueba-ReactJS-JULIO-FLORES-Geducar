import React from 'react';
import HomeUser from '../pages/HomeUser';
import {   BrowserRouter as Router} from "react-router-dom";

function AppRouter() {
    return (
        <>
            <Router>
                <HomeUser />
            </Router>
        </>
    );
}

export default AppRouter;
