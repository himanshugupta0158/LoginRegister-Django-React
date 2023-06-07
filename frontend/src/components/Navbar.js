import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

function Navbar({ logout, isAuthenticated}){

    console.log("You are in Navbar!");

    const guestLinks = () => {
        console.log("You are in Navbar>GuestLinks!");
        return (
        <React.Fragment>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/signup">Sign Up</Link>
        </React.Fragment>
        )
    };

    const authLinks = () => {
        console.log("You are in Navbar>authLinks!");
        return (
        <React.Fragment>
            <a className="nav-link" href="#!" onClick={logout}>Logout</a>
        </React.Fragment>
        )
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Auth System</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, {logout})(Navbar);