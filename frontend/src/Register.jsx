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
            <input value={name} type="text" placeholder="Your Full Name" id="name" name="name"/>
            
            <label for="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

            <label for="password">password</label>
            <input value={pass} type="password" placeholder="***********" id="password" name="password"/>

            <button>Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account ? Login here.</button>
        </div>
    )
}