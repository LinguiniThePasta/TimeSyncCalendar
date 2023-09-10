import {onAuthStateChanged, signOut} from "firebase/auth";
import React, {useEffect, useState} from "react";
import {auth} from "../firebase_setup/config";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
            return () => {
                listen();
            }
    }, []);
        const SignOut = () => {
            signOut(auth).then(() => {
                console.log("sign out successful");
            }).catch(error => console.log(error));
        }
    return (
        <div>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={SignOut}>Sign Out</button>
                </>
            ) : ( <p> Signed Out </p>
            )}
        </div>
    )
}
export default AuthDetails;