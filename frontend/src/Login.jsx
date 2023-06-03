import React, {useState} from "react"

export const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

            <label for="password">password</label>
            <input value={pass} type="password" placeholder="***********" id="password" name="password"/>

            <button>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account ? Register here.</button>
        </div>
    )
}