'use client'
import { createContext, useContext, useEffect, useState } from "react"

import Cookies from "js-cookie"


const AuthContext = createContext()

export const useAuthState = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({ email: "", avatar: "", firebase_token: "" })


    useEffect(() => {
        const email = Cookies.get('email')
        const avatar = Cookies.get('avatar')
        const isAuthenticated = Cookies.get('isAuthenticated')
        const firebase_token = Cookies.get('firebase_token')

        setUser({ email, avatar, firebase_token })
        setIsAuthenticated(isAuthenticated)

        // show modal if no cookies
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider