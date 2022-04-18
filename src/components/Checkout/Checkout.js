import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const onCheckOut = event => {
        event.preventDefault()
        toast('thanks For Perchase')
    }
    return (
        <div className='d-flex justify-content-center items-center p-5 class'>
        <div className='login'>
            <form onSubmit={onCheckOut}>
                <h1 className='text-center border-bottom'>Check out</h1>
                <label className='fs-3' htmlFor="name">Name</label>
                <input className='d-block p-2 w-100 mb-3' type="text" name="name" id="" placeholder='Name'  required/>
                <label className='fs-3' htmlFor="Address">Address</label>
                <input className='d-block p-2 w-100' type="text" name="address" id="" placeholder='address' required />
                <label className='fs-3' htmlFor="phone">Phone</label>
                <input className='d-block p-2 w-100' type="text" name="number" id="" placeholder='number' required />
                
                {/* <p className='mt-2'>{error}</p> */}
                
                <input  className='btn btn-success mt-4' type="submit" value="Checkout" />
                {/* <input className='d-block btn btn-success mt-2' type="submit" value="Login" /> */}
                


            </form>
        </div>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default Checkout;