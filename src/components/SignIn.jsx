import { useState } from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password)
    }

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('You are logged in');
            console.log(userCredential);
        }).catch((e) => console.log(e))
    }

    return (
        <div>
            <h2>Sign in your account</h2>
            <form onSubmit={handleLogin}>
                <input type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={handleEmail} />
                <input type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePassword} />
                <button type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default SignIn