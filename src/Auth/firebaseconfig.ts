import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCDn3kFzy8avWqiEatbDK_sbxFAi1q8PWk",
    authDomain: "fcs-films.firebaseapp.com",
    projectId: "fcs-films",
    storageBucket: "fcs-films.appspot.com",
    messagingSenderId: "11988729041",
    appId: "1:11988729041:web:d4c2abdbceff94826fd9f0",
    measurementId: "G-73PE9HG7FF"
};

export const app = initializeApp(firebaseConfig);
