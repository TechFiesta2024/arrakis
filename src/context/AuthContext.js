'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Cookies from "js-cookie"


const AuthContext = createContext()

export const useAuthState = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({ email: null, avatar: null })
    const urlPathname = usePathname()

    useEffect(() => {
        const email = Cookies.get('email')
        const avatar = Cookies.get('avatar')
        const isAuthenticated = Cookies.get('isAuthenticated')

        setUser({ email, avatar })
        setIsAuthenticated(isAuthenticated)

        // show modal if not user
    }, [urlPathname])

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider