import React, { useState , useEffect, createContext, Children } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {

    const [loading , setLoading] = useState(true)
    const [user , setUser] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if(user) navigate('/chats')
        })
    })

    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;