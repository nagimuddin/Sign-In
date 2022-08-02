import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Auth } from "firebase/auth";

const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [Error, setError] = useState("");

    const signUpUser = (email, name, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(Auth, email, password)
        .then(() => {
            return updateProfile(auth.currentUser, {
                displayName: name,
            });
        })
        .then((res) => console.log(res));
        .catch((err) => setError(err.masseg))
    };

    const signInUser = (email, password) => {

    };

    const signOutUser = () => {

    };

    const forgotPassword = (email) => {

    };

    const contextValue = {};
    return (
        <UserContext.Provider value={contextValue}>{children} </UserContext.Provider>
        );
};