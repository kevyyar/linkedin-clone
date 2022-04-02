import React, { useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import { auth } from './firebase/firebase';
import { login, logout } from './features/user/userSlice';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className={styles.app}>
      <Header />
      {!user ? <Login /> : (
        <div className={styles.appBody}>
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
