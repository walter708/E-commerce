import React from 'react';
import './sign-in-and-sign-up-page.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp = () => (
    <div className = 'sign-in-and-sign-up-page'>
    <SignIn />
    <SignUp />
    </div>
)
export default SignInSignUp;