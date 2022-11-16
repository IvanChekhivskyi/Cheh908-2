import React, {useContext} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="enter you login"/>
                <MyInput type="password" placeholder="enter you password"/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;