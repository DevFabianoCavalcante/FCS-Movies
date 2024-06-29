import React, { FormEvent } from "react";

export interface AuthProps {
    handleSubmit: (e:FormEvent)=> void,
    handleEmailChange: (e:FormEvent<HTMLInputElement>)=> void,
    handleNameChange?: (e:FormEvent<HTMLInputElement>)=> void,
    handlePasswordChange?: (e:FormEvent<HTMLInputElement>)=> void,
    email: string,
    password?: string,
    userName?: string,
}
