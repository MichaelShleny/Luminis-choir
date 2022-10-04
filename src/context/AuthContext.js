import { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../firebase/init'

const userContext = createContext()

export const AuthContextProvider = ({children}) => {

    //set state otherwise we dont have access to the current user details in the useffect
    //make sure its an obect because that we are going to be getting back {}
    const[user,setUser] = useState({})

        /*
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
        */

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        //current user gives access to a bunch of stuff, so auth it
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return() => {
            unsubscribe()
        }
    //this is the dependency array because we only want the function to run once
    },[])

    return(
        <userContext.Provider value={{/*createUser,*/ user, logout, signIn }}>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(userContext)
}