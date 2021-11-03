import React from 'react';
import Nav from '../layout/topbar/Nav';

function HomeIndex({ user }) {
    let message;

    if (user) {
        message = `Hi ${user.name}`;
    } else {
        message = 'You are not logged in';
    }

    //console.log(user);

    return (
        <div>
            <Nav user={user} />
            <h1>{message}</h1>
        </div>
    );
}

export default HomeIndex;