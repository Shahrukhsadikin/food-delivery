import React,{ createContext } from 'react';
import useFirsebase from '../Hook/usefirebase';
export const AuthContext = createContext ()
const Authprovider = ({children}) => {
    const allContext = useFirsebase();
    return (
        <div>
            <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;