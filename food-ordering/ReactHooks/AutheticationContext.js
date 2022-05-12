import React, {useState, useContext} from 'react';

export const AuthenticationContext = React.createContext();

export function AuthenticationProvider({children}) {
    // hard code
    const correctUser = {
        username: "tram",
        pwd: "tram123",
    };

    const [logIn, setLogIn] = useState(false);
    const [success, setSuccess] = useState("");
    const [err, setErr] = useState("");
    
    const authenticatedAccount = (user) => {
        if(user.username === correctUser.username && user.pwd === correctUser.pwd){
            setLogIn(true);
            setSuccess("Successful! Welcome to 'TeeTea' Restaurant, hope you enjoy all best food and drinks.")
            setErr("");
        } else{
            setErr("Incorrect Username or Password. Try it again!");
            setLogIn(false);
            setSuccess("");
        }
    };

    return(
        <AuthenticationContext.Provider value={{logIn, err, success, authenticatedAccount}}>
            {children}
        </AuthenticationContext.Provider>
    )
}