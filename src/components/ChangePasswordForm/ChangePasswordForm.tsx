import { AuthProps } from '../../interface/AuthProps';
import * as C from './PasswordStyle';

export const ChangePasswordForm = ({handleEmailChange, handleSubmit, email}: AuthProps) => {


    return (
        <C.LoginArea>
            <C.Title>Alterar Senha</C.Title>
            <C.FormChangePassword onSubmit={handleSubmit} data-auth-type= 'changePassword'>
                <label id='alertMessageArea' data-message=''>
                    E-mail
                    <input type='text' name='ChangePassword' value={email} onChange={handleEmailChange} autoComplete='off' />
                </label>
                <button type='submit'>Enviar E-mail</button>
            </C.FormChangePassword>
        </C.LoginArea>
    );
};
