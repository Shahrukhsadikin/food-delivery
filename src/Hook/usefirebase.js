import{getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth"
import {useEffect, useState} from 'react';
import initializeAuthentication from "../Component/Pages/Login-form/Firebase/firebase.init";
initializeAuthentication()
const useFirsebase=()=>{
    const [user,setUsers] =useState({})

    const auth =getAuth();
    const GoogleProvaider =new GoogleAuthProvider();


    const signInUsingGoogle =()=>{
        signInWithPopup(auth,GoogleProvaider)
        .then(result =>{
            console.log(result.user)
        })
    }
    const logout = ()=>{
        signOut(auth)
        .then(()=>{
            setUsers({})
        })
    }
    useEffect (()=>{
        onAuthStateChanged(auth,(user)=>{
            if (user){
                setUsers(user);
            }
        })
    },[])

    return {
        user,
        signInUsingGoogle,
        logout

    }
}


export default useFirsebase;