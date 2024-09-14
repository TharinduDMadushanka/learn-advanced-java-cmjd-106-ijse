interface AuthContextType{
    isAuthentication: boolean;
    jwtToken:string | null;
    login: (jwtToken: string) => void;
    logout: () => void;
}

export default AuthContextType;