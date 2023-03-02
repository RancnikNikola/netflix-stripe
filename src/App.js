import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './store/user/userSlice';
import { Routes, Route } from 'react-router-dom';
import { auth } from './utils/firebase/firebase.utils';
import { login, logout } from './store/user/userSlice';

import Home from './pages/home/home.component';
import Login from './pages/login/login.component';
import Profile from './pages/profile/profile.component';
import './App.scss';

const App = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
        {!user ? (
           <Login />
        ) : (
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/profile" element={ <Profile /> } />
          </Routes>
        )}
    </div>
  );
}

export default App;
