import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'
import { login } from '../../features/user/userSlice'
import styles from './Login.module.css'
import { useDispatch } from 'react-redux'

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // dispatchers
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }))
        })).catch(error => alert(error))
    }

    const register = () => {
        if (!name) {
            alert('Please enter your name')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        }))
                    }).catch(error => alert(error))
            })
    }

    return (
        <div className={styles.login}>
            <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png" alt="" />
            <form onSubmit={loginToApp}>
                <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                <input type="url" placeholder='Profile Picture (url)' value={profilePic} onChange={e => setProfilePic(e.target.value)} />
                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                {/* <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /> */}
                <button type='submit' onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member? <span onClick={register} className={styles.loginRegister}>Register Now</span></p>
        </div>
    )
}

export default Login