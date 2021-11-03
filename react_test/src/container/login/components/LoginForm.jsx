import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

function LoginForm() {
    const { register, handleSubmit } = useForm();
    const [redirect, setRedirect] = useState(false);

    async function onSubmit(data) {
        const result = await axios.post('login', data)
        if (result.data.message === 'Unauthorized' && result.data.status_code === 500) {
            alert('login is not authorized');
            setRedirect(false);
        } else {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" {...register('email')} id="inputEmail" className="form-control" placeholder="Email address" required />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" {...register('password')} id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    )
}

export default LoginForm;