import React from 'react'
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormInput from '../Form-Input/Form-Input';
import Button from '../button/button';
import "./Sign-up.scss"
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log("form fields:", formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();


        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            else { console.log(error) }
        }
    };



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };



    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    Label="Display Name" 
                    type="text"
                    required onChange={handleChange}
                    name='displayName'
                    value={displayName} />

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

                <FormInput
                    Label="Confirm Password"
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword} />

                {/* <button type='submit'>Submit</button> */}
                <Button children='Submit' buttonType='inverted' type='submit'/>
            </form>
        </div>
    )
}

export default SignUp;