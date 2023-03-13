import React from 'react';
import SignInForm from '../components/sign-in-form';
import Navbar from '../components/navbar';

function SignIn() {
    return (
        <div className='page'>
            {/* <Navbar /> */}
            <SignInForm />
        </div>
    );
}

export default SignIn;