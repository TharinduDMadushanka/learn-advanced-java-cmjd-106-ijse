import {createContext, useContext, useEffect, useState} from "react";
import AuthContextType from "../types/AuthContextType.tsx";
import AuthProviderPropsType from "../types/AuthProviderPropsType.tsx";

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    jwtToken: null,
    loading:true,
    login: () => {
    },
    logout: () => {
    }
});

export function AuthProvider({children}: AuthProviderPropsType) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [jwtToken, setJwtToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true)

    function login(jwtToken: string) {
        setIsAuthenticated(true);
        setJwtToken(jwtToken);
        // add token in to browser local storage
        localStorage.setItem("token", jwtToken);
    }

    function logout() {
        setIsAuthenticated(false);
        setJwtToken(null)
        // remove when logout
        localStorage.removeItem("token")
    }

    // when load the page store token in to the local storage
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (token != null){
            setIsAuthenticated(true);
            setJwtToken(token)
            setLoading(true)
        }else {
            setLoading(false)
        }
    },[])

    return (
        <AuthContext.Provider value={{isAuthenticated, jwtToken,loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}