
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/userSlice';
import Navigation from '../../components/navigation/navigation.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './profile.styles.scss';

const Profile = () => {

    const user = useSelector(selectUser);

    return (
        <div className='profile'>
            <Navigation />
            <div className="profile-body">
                <h1>Edit Profile</h1>
                <div className="profile-info">
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='' />
                    <div className="profile-details">
                        <h2>{user.email}</h2>
                        <div className='profile-plans'>
                            <h3>Plans</h3>
                            <button onClick={signOutUser} className='sign-out-btn'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;