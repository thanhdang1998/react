import React from "react";
import { useForm } from "react-hook-form";


function RegisterForm() {
    const { register, handleSubmit } = useForm();
    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h3 mb-3 font-weight-normal">Please register</h1>

            <label htmlFor="inputFirstName" className="sr-only">First Name</label>
            <input type="text" {...register("firstName")} id="inputFirstName" className="form-control" placeholder="First name" required />

            <label htmlFor="inputLastName" className="sr-only">Last Name</label>
            <input type="text" {...register("lastName")} id="inputLastName" className="form-control" placeholder="Last Name" required />

            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" {...register("email")} id="inputEmail" className="form-control" placeholder="Email address" required />

            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" {...register("password")} id="inputPassword" className="form-control" placeholder="Password" required />

            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    )
}

export default RegisterForm;