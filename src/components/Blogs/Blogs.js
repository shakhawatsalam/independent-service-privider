import React from 'react'; 
import './Blogs.css'



const Blogs = () => {
    return (
        <div className=' mt-3 container flex-column d-flex  align-items-center question'>
            <h1>Difference between authorization and authentication?</h1>
            <p className='fw-bold'><h6>Answer:</h6> the process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization.</p>
            <h1 className='mt-5'>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p className='fw-bold'><h6>Answer:</h6> Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase</p>
            
            <h3>other options for implement authentication</h3>
            <p className='fw-bold'>
            <ul>
                <li>Email/Password</li>
                <li>Google</li>
                <li>Play Games</li>
                <li>Apple</li>
                <li>Facebook</li>
                <li>GitHub</li>
                <li>Twitter</li>
                <li>Yahoo</li>
                <li>Game Center</li>
            </ul></p>
            <h1>What other services does firebase provide other than authentication?</h1>
            
            <p className='fw-bold'><h6>Answer:</h6> firebase has almost all Backend features as Example : <ul>
                <li>Firebase Database</li>
                <li>Firebase Cloud Storage</li>
                <li>Firebase Cloud Messaging</li>
                <li>Firebase Remote Config</li>
                <li>Firebase Database</li>
                <li>Firebase Authentication</li>
            </ul>
            it's helps us to build fully featuresed wep app that's why we use firebase.

            </p>
        </div>
    );
};

export default Blogs;