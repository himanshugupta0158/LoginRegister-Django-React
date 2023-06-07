import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { reset_password } from '../actions/auth';

function ResetPassword({ reset_password }){

    const [requestSent, setRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        email : ''
    });

    const {email} = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);

    };

    // Is requestSent is True then
    // Redirect them to home page
    if (requestSent){
        // return <Navigate to="/" />
        document.getElementById('register_message').style.display = 'block';
    }

    return (
        <div className='container mt-5'>
            <div class="alert alert-primary" role="alert" id='register_message' style={{display: 'none'}}>An Activation Link has been sent to your Mail, please check</div>
            <h1>Request Password Reset</h1>
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
                <button className='btn btn-primary' type='submit'>
                    Reset Password
                </button>
            </form>
        </div>
    );
};


export default connect(null, { reset_password })(ResetPassword);