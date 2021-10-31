import React from 'react';

import UseAuth from '../../../Hook/useauth';


const Login = () => {
    const { signInUsingGoogle} =UseAuth();

    const handleGoogleLogin =() =>{
        signInUsingGoogle()
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;