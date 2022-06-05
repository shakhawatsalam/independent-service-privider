import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [sendEmailVerification, sending, SendEmailError] = useSendEmailVerification(
        auth
    );
    if (sending) {
        const notify = () => toast("Wow so easy !");
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;

        sendEmailVerification(email);
        createUserWithEmailAndPassword(email, password);


    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='d-flex justify-content-center items-center p-5 class'>
            <div className='login'>
                <form onSubmit={handleFormSubmit}>
                    <h1 className='text-center border-bottom'>Register</h1>
                    <label className='fs-3' htmlFor="name">Name</label>
                    <input className='d-block p-2 w-100' type="text" name="name" id="" placeholder='Your Name' />
                    <label className='fs-3' htmlFor="email">Email</label>
                    <input className='d-block p-2 w-100 mb-3' type="email" name="email" id="" placeholder='Your email' required />
                    <label className='fs-3' htmlFor="password">Password</label>
                    <input className='d-block p-2 w-100' type="password" name="password" id="" placeholder='password' required />
                    <p className='mt-2'>Already have an account<Link to='/login'> <span>Login</span></Link></p>
                    <input className='btn btn-success mt-2' type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;




<h1 className='text-center'><span>Please</span> Register</h1>