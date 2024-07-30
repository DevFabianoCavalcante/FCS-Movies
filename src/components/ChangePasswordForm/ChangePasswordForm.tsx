import { AuthProps } from '../../interface/AuthProps';
import * as C from './PasswordStyle';

import { Button } from '../Button/Button';

export const ChangePasswordForm = ({handleEmailChange, handleSubmit, email}: AuthProps) => {


    return (
        <C.LoginArea>
            <C.Title>Alterar Senha</C.Title>
            <C.FormChangePassword onSubmit={handleSubmit} data-auth-type= 'changePassword'>
                <label id='alertMessageArea' data-message=''>
                    E-mail
                    <input type='text' name='ChangePassword' value={email} onChange={handleEmailChange} autoComplete='off' />
                </label>
                <Button typeBtn='submit' border={false} color={'#5F5400'} fontSize={'2rem'} fontWeight={'600'} height={'4.5rem'} width={'18rem'} background={'#B6A100, #FFFF00'} isGradient={true}>
                    Enviar E-mail
                </Button>
            </C.FormChangePassword>
        </C.LoginArea>
    );
};
