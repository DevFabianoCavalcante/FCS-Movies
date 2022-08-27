import React from 'react';
import * as C from '../LoginForm/LoginFormStyle';
import { AuthProps } from '../../interface/AuthProps'
import { Link } from 'react-router-dom';


export const LoginForm = ({handleSubmit, handleEmailChange, handlePasswordChange, email, password}: AuthProps) => {

    

    return (
        <C.LoginArea>
            <C.Title>Entrar</C.Title>
            <C.FormLogin  onSubmit={handleSubmit} data-auth-type= 'login'>
                <label>
                    E-mail
                    <input type='text' name='e-mail' value={email} onChange={handleEmailChange} autoComplete='off'  />
                </label>
                <label id='alertMessageArea' data-message=''>
                    Senha
                    <input type='password' name='senha' value={password} onChange={handlePasswordChange} autoComplete='off' />
                </label>
                <Link to='/login/changePassword'><p>Esqueci minha senha</p></Link>
                <button type='submit'>Entrar</button>
                <Link to='/login/register'><h3>Novo por aqui? crie uma conta</h3></Link>
            </C.FormLogin>    
        </C.LoginArea>
    )
}