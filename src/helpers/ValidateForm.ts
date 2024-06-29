import { UserType } from "../interface/user"

const alertForm = (inputArea: HTMLElement) => {
    inputArea.classList.toggle('alert');
    setTimeout(()=> {
        inputArea.classList.toggle('alert');
    }, 2000);
};

export const ValidateForm = ({email, password, userName, typeAuth}: UserType): boolean => {

    const alertArea = document.querySelector('#alertMessageArea') as HTMLElement;
    const user = email.substring(0, email.indexOf('@'));
    const domain = email.substring(email.indexOf('@') +1, email.length);
    const finalEmail = email.indexOf('.com') !== -1;

    if(
        (user.length <=2) ||
        (domain.length <=3) ||
        (user.search('@') !=-1) ||
        (domain.search('@') !=-1) ||
        (user.search(' ') !=-1) ||
        (domain.search(' ') !=-1) ||
        (domain.search('.') ==-1) ||
        (domain.indexOf('.') <=1) ||
        (domain.lastIndexOf('.') > domain.length -1)) {
        
        alertArea.setAttribute('data-message', 'Formato de e-mail incorreto');
        alertForm(alertArea);
        return false;
    }
    else if(typeAuth === 'register') {

        if ((!password) || (password.length < 6)) {
            alertArea.setAttribute('data-message', 'A senha deve ter no minímo 6 caracteres');
            alertForm(alertArea);
            return false;
        }
        else if(userName === '') {
            alertArea.setAttribute('data-message', 'Preencha seu nome');
            alertForm(alertArea);
            return false;
        }
    }

    return true;
}
