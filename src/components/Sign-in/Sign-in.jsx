import React from 'react'
import { useState,useContext} from 'react';

import FormInput from '../Form-Input/Form-Input';
import Button , {BUTTON_TYPE_CLASSES}  from '../button/button';

import { UserContext } from '../../contexts/user_context';

import "./Sign-in.scss"
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    SignInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase';


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
        // creating user auth object with google pop up
        console.log("button pressed")
        await signInWithGooglePopup();
        // creating user document from auth object
        
        // save current user

    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    // sign in using email and password
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await SignInAuthUserWithEmailAndPassword(email, password);
    
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
                    <Button children='Sign in' buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit' />
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
