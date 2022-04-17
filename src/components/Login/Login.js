import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='d-flex justify-content-center items-center p-5 class'>
            <div className='login'>
                <form action="">
                    <h1 className='text-center border-bottom'>Login</h1>
                    <label className='fs-3' htmlFor="email">Email</label>
                    <input className='d-block p-2 w-100 mb-3' type="email" name="email" id="" placeholder='Your email' />
                    <label className='fs-3' htmlFor="password">Password</label>
                    <input className='d-block p-2 w-100' type="password" name="password" id="" placeholder='password' />
                    <p className='mt-2'>Please Register<Link to='/register'> <span>register</span></Link></p>
                    <input className='btn btn-success mt-2' type="submit" value="Login" />


                </form>
            </div>
        </div>
    );
};

export default Login;