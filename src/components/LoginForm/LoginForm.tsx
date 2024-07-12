import React from 'react';
import * as C from '../LoginForm/LoginFormStyle';
import { AuthProps } from '../../interface/AuthProps'
import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';


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
                <Link to='changePassword'><p>Esqueci minha senha</p></Link>
                <Button typeBtn='submit' border={false} color={'#5F5400'} fontSize={'2rem'} fontWeight={'600'} height={'4.5rem'} width={'18rem'} background={'#B6A100, #FFFF00'} isGradient={true}>
                    Entrar
                </Button>
                <Link to='/login/register'><h3>Novo por aqui? crie uma conta</h3></Link>
            </C.FormLogin>    
        </C.LoginArea>
    )
}