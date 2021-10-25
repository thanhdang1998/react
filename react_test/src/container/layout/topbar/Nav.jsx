import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a href="/#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a href="/login" className="nav-link">Login</a>
                    </li>
                    <li className="nav-item active">
                        <a href="/register" className="nav-link">Register</a>
                    </li>
                </ul>
            </div>
        </nav >
    );
};

export default Nav;