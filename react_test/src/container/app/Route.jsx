import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from '../login/components/LoginForm'
import Register from '../register/components/RegisterForm';
import Home from '../home/HomeIndex';

function Router() {
    return (
        <>
            <BrowserRouter>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <Route path="/" exact component={Home} />
            </BrowserRouter>
        </>
    );
}

export default Router;