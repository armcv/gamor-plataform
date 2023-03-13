import React from 'react';
import { useRef } from 'react';

function SignInForm() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = () => {
        console.log('Email ', emailRef.current.value);
        console.log('Password ', passwordRef.current.value);

    }

    return (
        <div className='card'>
            <span>Sign In</span>
            <input type="email" ref={emailRef} placeholder='Email' />
            <input type="password" ref={passwordRef} placeholder='Password' />
            <button onClick={handleSubmit} className='sign-in-submit'>
              Sign In
            </button>
        </div>
    );
}

export default SignInForm;