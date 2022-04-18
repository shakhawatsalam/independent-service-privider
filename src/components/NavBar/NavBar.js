import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './NavBar.css';

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate('/');

      };
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="#">AMY PORTERFIELD</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-0" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 margin">
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/about">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/blogs">Blogs</Link>
                            </li>
                            {user ?
                            <li className="nav-item">
                                <Link onClick={logout} className="nav-link fw-bold" to="/login">Singout</Link>
                                </li> :
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/login">Login</Link>
                                </li>
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;