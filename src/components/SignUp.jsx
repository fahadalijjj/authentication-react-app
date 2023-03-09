import { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
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

    const handleRegistration = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('Your account is registered');
            console.log(userCredential);
        }).catch((e) => console.log(e))

        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h2>Sign Up your account</h2>
            <form onSubmit={handleRegistration}>
                <input type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={handleEmail} />
                <input type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePassword} />
                <button type='submit'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default SignUp