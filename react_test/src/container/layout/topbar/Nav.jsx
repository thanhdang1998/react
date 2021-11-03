import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ user }) {

    async function logout() {
        await axios.post('logout');
    }

    let links;

    if (user) {
        links = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" onClick={logout} className="nav-link">Logout</Link>
                </li>
            </ul>
        )
    } else {
        links = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        )
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/#" className="nav-link">Home</Link>
                    </li>
                </ul>
                {links}
            </div>
        </nav >
    );
};

export default Nav;