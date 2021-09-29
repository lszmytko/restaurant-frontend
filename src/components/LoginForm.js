import React from 'react'
import { useGlobalContext } from '../context/context'
import LoginForm_dump from './LoginForm_dump';

const LoginForm = () => {
    const {userInfo} = useGlobalContext();
    const {isLogged} = userInfo;

    const logIn = (loginDetails)=>{
        
    }
    return (
        <LoginForm_dump isLogged={isLogged}/>
    )
}

export default LoginForm;
