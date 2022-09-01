import './utils/style.css';
import * as C from './LoginStyle';
import { FormEvent, useState, useEffect } from 'react';
import {Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { RegisterForm } from '../../components/RegisterForm/Register';
import { ChangePasswordForm } from '../../components/ChangePasswordForm/ChangePasswordForm';

import LoginImage from './utils/img/ImageLoginPage.jpg';

import { LoginUser, RegisterUser, ResetPassword } from '../../Auth/auth';

export const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const directToLoginPage = () => {
        setTimeout(()=>{
            navigate('/login');
        }, 6000);
    };

    const handleEmailChange = (e:FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };

    const handleNameChange = (e:FormEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value);
    };

    const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const typeAuth = (e.currentTarget.getAttribute('data-auth-type'));

        if(typeAuth === 'login') {
            LoginUser({email, password, typeAuth});
            navigate('/movies');

        } else if (typeAuth === 'register') {
            RegisterUser({email, password, userName, typeAuth});

        } else if (typeAuth === 'changePassword') {
            ResetPassword({ email, typeAuth });
            directToLoginPage();
        }
    };

    return (
        <C.ContainerPage>
            <C.ImageArea img={LoginImage} />
            <C.LoginArea>
                <Routes>
                    <Route path='/' element={
                        <LoginForm
                            handleEmailChange={handleEmailChange}
                            handlePasswordChange={handlePasswordChange}
                            handleSubmit={handleSubmit}
                            email={email}
                            password={password}
                        />}
                    />
                    <Route path='/register' element={
                        <RegisterForm 
                            handleEmailChange={handleEmailChange}
                            handleNameChange={handleNameChange}
                            handlePasswordChange={handlePasswordChange}
                            handleSubmit={handleSubmit}
                            email={email}
                            password={password}
                            userName={userName}
                        />}
                    />
                    <Route path='/changePassword' element={
                        <ChangePasswordForm 
                            handleEmailChange={handleEmailChange}
                            email={email}
                            handleSubmit={handleSubmit}
                        />}
                    />
                </Routes>
            </C.LoginArea>
        </C.ContainerPage>
    )
}