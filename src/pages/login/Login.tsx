import './utils/style.css';
import * as C from './LoginStyle';
import { FormEvent, useState, useEffect } from 'react';
import {Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, createUserWithEmailAndPassword,updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../../Auth/firebaseconfig';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { RegisterForm } from '../../components/RegisterForm/Register';
import { ChangePasswordForm } from '../../components/ChangePasswordForm/ChangePasswordForm';

import LoginImage from './utils/img/ImageLoginPage.jpg';

import { alertForm } from '../../helpers/alertForm';
import { ValidateForm } from '../../helpers/ValidateForm';


export const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const alertArea = document.querySelector('#alertMessageArea') as HTMLElement;

    const directToLoginPage = () => {
        setTimeout(()=>{
            navigate('/login');
        }, 5000);
    };

    const clearForm = () => {
        setTimeout(()=>{
            setEmail('');
            setUserName('');
            setPassword('');
        }, 5000);
    }

    const handleEmailChange = (e:FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };

    const handleNameChange = (e:FormEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value);
    };

    const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const typeAuth = (e.currentTarget.getAttribute('data-auth-type'));
        const isValid = ValidateForm({ email, password, typeAuth });
        const auth = getAuth();

        if(typeAuth === 'login') {
            if(isValid) {
                await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/movies');
                    !user.emailVerified ?? sendEmailVerification(user);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    alertArea.setAttribute('data-message', 'Erro ao fazer login, tente novamente');
                    alertForm(alertArea);
                });
            }
        } else if (typeAuth === 'register') {
            if(isValid) {
                await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {displayName: userName});
                    sendEmailVerification(user);
                    alertArea.setAttribute('data-message', 'Usuário criado com sucesso, aguarde...');
                    alertForm(alertArea);
                    directToLoginPage();
                    clearForm();
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    alertArea.setAttribute('data-message', 'Erro ao criar usuário, tente novamente');
                    alertForm(alertArea);
                });
            }
        } else if (typeAuth === 'changePassword') {
            if(isValid) {
                await sendPasswordResetEmail(auth, email)
                .then(() => {
                    alertArea.setAttribute('data-message', 'E-mail Enviado, aguarde...');
                    alertForm(alertArea);
                    directToLoginPage();
                    clearForm();
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    alertArea.setAttribute('data-message', 'Não há usuário cadastrado com esse e-mail');
                    alertForm(alertArea);
                });
            }
        }
    };

    app;

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