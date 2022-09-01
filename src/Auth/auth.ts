import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { app } from './firebaseconfig';
import { UserType } from '../interface/user';
import { ValidateForm } from "../helpers/ValidateForm";


//Function alert in inputs
const alertForm = (inputArea: HTMLElement) => {
    inputArea.classList.toggle('alert');
    setTimeout(()=> {
        inputArea.classList.toggle('alert');
    }, 5000);
};

export const RegisterUser = async ({email, password, userName, typeAuth}: UserType) => {
    const alertArea = document.querySelector('#alertMessageArea') as HTMLElement;

    const isValid = ValidateForm({ email, password, userName, typeAuth });

    if(isValid && password) {
        const auth = getAuth();

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {displayName: userName});
            sendEmailVerification(user);

            alertArea.setAttribute('data-message', 'Usuário criado com sucesso, aguarde...');
            alertForm(alertArea);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alertArea.setAttribute('data-message', 'Erro ao criar usuário, tente novamente');
            alertForm(alertArea);
        });
    }
}

export const LoginUser =  async ({email, password, typeAuth}: UserType) => {
    const alertArea = document.querySelector('#alertMessageArea') as HTMLElement;

    const isValid = ValidateForm({ email, password, typeAuth });

    if(isValid && password) {
        const auth = getAuth();
        
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            !user.emailVerified ?? sendEmailVerification(user);
            console.log('logado');
            
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alertArea.setAttribute('data-message', 'Erro ao fazer login, tente novamente');
            alertForm(alertArea);
        });
    }
}

export const ResetPassword = async ({email, typeAuth}: UserType) => {
    const alertArea = document.querySelector('#alertMessageArea') as HTMLElement;

    const isValid = ValidateForm({ email, typeAuth });

    if(isValid) {
        const auth = getAuth();
        
        await sendPasswordResetEmail(auth, email)
        .then(() => {
            alertArea.setAttribute('data-message', 'E-mail Enviado, aguarde...');
            alertForm(alertArea);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alertArea.setAttribute('data-message', 'Não há usuário cadastrado com esse e-mail');
            alertForm(alertArea);
        });
    }
}


app;
