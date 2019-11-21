import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import Login from './login';
import axios from 'axios';

const SignUp = props => { 
    const userInfo = { 
        username: "",
        password: ""
    }
    
const signUpApi = "https://localhost:33300/api/auth/register"

const handleSubmit = event => { 
    event.preventDefault();
    axios
    .post(signUpApi, userInfo)
    .then(() => { 
        props.history.push("/login")
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