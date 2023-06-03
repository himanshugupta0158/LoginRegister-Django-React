import React, {useState} from "react";


export const Register = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <label for="name">Full Name</label>
            <input type="text" placeholder="Your Full Name" id="name" name="name"/>
            
            <label for="email">Email</label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

            <label for="password">Password</label>
            <input type="password" placeholder="***********" id="password" name="password"/>

            <button>Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account ? Login here.</button>
        </div>
    )
}