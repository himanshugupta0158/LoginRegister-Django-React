import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { login } from '../actions/auth';

function Login({ login, isAuthenticated }){

    console.log("You are in Login!");
    const [formData, setFormData] = useState({
        email : '',
        password : ''
    });

    const {email, password} = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);

    };

    // Is User AUthenticated
    // Redirect them to home page
    if (isAuthenticated){
        return <Navigate to="/" />
    }

    return (
        <div className='container mt-5'>
            <h1>Login In</h1>
            <p>Login into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />

                </div>
                
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>
                    Login
                </button>
            </form>

            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className='mt-3'>
                Forgot your Password <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps, { login })(Login);