import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './navigation.styles.scss';

const Navigation = () => {

    const [ show, setShow ] = useState(false);
    const navigate = useNavigate();

    const transitionNavigation = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    const onClickGoToProfile = () => {
        navigate('/profile');
    }

    const onClickGoToHome = () => {
        navigate('/');
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavigation)

        // cleanup function
        return () => window.removeEventListener('scroll', transitionNavigation)
    }, [])

    return (
        <div className={`navigation ${show && 'navigation-black'}`}>
            <div className="navigation-content">
                <img
                    onClick={onClickGoToHome}
                    className='navigation-logo' 
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                    alt='logo' />
                <img 
                    onClick={onClickGoToProfile}
                    className='navigation-avatar' 
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' 
                    alt='avatar' />
            </div>
            
        </div>
    );
};

export default Navigation;