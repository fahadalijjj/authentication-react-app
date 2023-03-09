import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';


const Profile = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const response = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            response();
        }
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            console.log('You are logged Out');
        }).catch((e) => console.log(e));
    }

    return (
        <div>{authUser ? <><p>{`Signed In as ${authUser.email}`}</p> <button onClick={logOut}>Log out</button></> : <p> Nobody is logged In</p>}</div>
    )
}



export default Profile