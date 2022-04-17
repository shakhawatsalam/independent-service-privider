import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
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
                                <Link className="nav-link active fw-bold" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="#">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="#">Blogs</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;