
import { useRef } from 'react';
import { createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import './sign-up.styles.scss';

const SignUp = () => {

    const emailRef = useRef(null);
    const passRef = useRef(null);
    

    const register = (event) => {
        event.preventDefault();

        createAuthUserWithEmailAndPassword(emailRef.current.value, passRef.current.value)
        .then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (event) => {
        event.preventDefault();

        signInAuthUserWithEmailAndPassword(emailRef.current.value, passRef.current.value)
        .then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });

    };

    return (
        <div className='sign-up'>
            <form>
                <h1>Sign in</h1>
                <input ref={emailRef} type='email' placeholder='Email' />
                <input ref={passRef} type='password' placeholder='password' />
                <button type='submit' onClick={signIn}>Sign in</button>
                <p>
                   <span className='new-to-netflix'>New to Netflix?</span>
                   <span onClick={register} className='sign-up-now'>Sign Up now.</span>
                </p>
            </form>
        </div>
    );
};

export default SignUp;