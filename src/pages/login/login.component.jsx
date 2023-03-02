import { useState, Fragment } from 'react';
import SignUp from '../../components/sign-in-form/sign-up.component';
import './login.styles.scss';

const Login = () => {

    const [ signIn, setSignIn ] = useState(false);

    const handleSignIn = () => {
        setSignIn(true);
    }

    return (
        <div className='login'>
            <div className="login-background">
                <img 
                    className='login-img' 
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                    alt='' 
                />
                <button className='sign-in-btn' onClick={handleSignIn}>Sign in</button>

                <div className="login-gradient"></div>
            </div>
            <div className="login-body">
                {signIn ? (
                    <SignUp />
                ) : (
                    <Fragment>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="login-input">
                            <form>
                                <input type='email' placeholder='Email Address' />
                                <button className='login-get-started-btn' onClick={handleSignIn}>get started</button>
                            </form>
                        </div>
                    </Fragment>
                )}
               
            </div>
        </div>
    );
};

export default Login;