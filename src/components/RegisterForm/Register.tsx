import React from 'react';
import * as C from '../RegisterForm/RegisterStyle';
import { AuthProps } from '../../interface/AuthProps';

import { Button } from '../Button/Button';


export const RegisterForm = ({handleSubmit, handleEmailChange, handleNameChange, handlePasswordChange, email, password, userName}: AuthProps) => {

    

    return (
        <C.RegisterArea>
            <C.Title>Registrar</C.Title>
            <C.FormRegister  onSubmit={handleSubmit} data-auth-type='register'>
                <label>
                    Nome
                    <input type='text' name='e-mail' value={userName} onChange={handleNameChange} autoComplete='off'  />
                </label>
                <label>
                    E-mail
                    <input type='text' name='e-mail' value={email} onChange={handleEmailChange} autoComplete='off'  />
                </label>
                <label id='alertMessageArea' data-message=''>
                    Senha
                    <input type='password' name='senha' value={password} onChange={handlePasswordChange} autoComplete='off' />
                </label>
                <Button typeBtn='submit' border={false} color={'#5F5400'} fontSize={'2rem'} fontWeight={'600'} height={'4.5rem'} width={'18rem'} background={'#B6A100, #FFFF00'} isGradient={true}>
                    Criar Conta
                </Button>
            </C.FormRegister>    
        </C.RegisterArea>
    )
}