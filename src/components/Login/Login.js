import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth, { updatePassword: false });
    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
        auth
    );
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error : {error?.message}</p>
    }
    let loadingElement;
    if (loading) {
        loadingElement = <p>Loading...</p>
    }


    const login = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
        navigate('/')
        console.log(error);
    }
    const forgotPassword = async () => {
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please Enter Your Email Address');
        }


    }



    return (
        <div className='d-flex justify-content-center items-center p-5 class'>
            <div className='login'>
                <form onSubmit={login}>
                    <h1 className='text-center border-bottom'>Login</h1>
                    <label className='fs-3' htmlFor="email">Email</label>
                    <input className='d-block p-2 w-100 mb-3' type="email" name="email" id="" placeholder='Your email' required onBlur={(e) => setEmail(e.target.value)} />
                    <label className='fs-3' htmlFor="password">Password</label>
                    <input className='d-block p-2 w-100' type="password" name="password" id="" placeholder='password' required />
                    <p className='mt-2'>Please Register<Link to='/register'> <span>register</span></Link></p>
                    <p className='mt-2'><Link to='' onClick={forgotPassword}> <span>forgot Password</span></Link></p>
                    {/* <p className='mt-2'>{error}</p> */}
                    {errorElement}
                    {loadingElement}
                    <input className='btn btn-success mt-2' type="submit" value="Login" />


                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;