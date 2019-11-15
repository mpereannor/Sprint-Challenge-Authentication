import React, { useState } from 'react';
import axios from "axios"; 
import homepage from './homepage';

const Login = ({ history }) => { 

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })


    const handleChange = event => { 
        setUserInfo({ 
            ...userInfo,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => { 
        event.preventDefault();
        axios.post('http://localhost:3300/api/auth/login', userInfo)
        .then(response => { 
            localStorage.setItem('token', response.data.payload)
            history.push("/homepage")
        })
        .catch(error => console.log(error.response))
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text"
            name="username"
            placeholder="enter your username"
            onChange={ handleChange}
            value={ userInfo.username}
            />
            <input type="password"
            name="password"
            placeholder= "enter password"
            onChange={ handleChange}
            value = { userInfo.password}
            />

            <button type="submit"> Log In </button>
        </form>
    )
}

export default Login;