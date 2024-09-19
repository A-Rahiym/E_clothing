import React from 'react'
import { useState } from 'react';
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    SignInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase';

import FormInput from '../Form-Input/Form-Input';
import Button from '../button/button';
import "./Sign-in.scss"


const defaultFormFields = {
    email: '',
    password: ''
}


const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    // console.log("form fields:", formFields)


    // sign in with google pop up
    const SignInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        const response = await createUserDocumentFromAuth(user);
        console.log(response)
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    // sign in using email and password
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await SignInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong password');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.log(error);
            }
        }
    };



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };



    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    Label="Email"
                    type="email"
                    required onChange={handleChange}
                    name='email'
                    value={email} />

                <FormInput
                    Label="Password"
                    required onChange={handleChange}
                    name='password'
                    value={password} />

                <div className='buttons-container'>
                    <Button children='Sign in' buttonType='inverted' type='submit' />
                    <Button type='button' buttonType={'google'} onClick={SignInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
